import fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import fs from "fs";
import path from "path";
import { CORS_ORIGIN } from "../constants";
import cookie from "@fastify/cookie";
import { FastifyRequest } from "fastify";
import { FastifyReply } from "fastify";
import { replace } from "lodash";
function createServer() {

    const app = fastify();

    // ! SETUP CORS
    app.register(cors, {
        origin: CORS_ORIGIN,
        credentials: true
    });

    // ! SETUP JWT
    app.register(jwt, {
        secret: {
            // cwd -> current working directory
            private: fs.readFileSync(`${(path.join(process.cwd()), "certs")}/private.key`),
            public: fs.readFileSync(`${(path.join(process.cwd()), "certs")}/public.key`),
        },
        sign: { algorithm: "RS256" },
        cookie: {
            cookieName: "token",
            signed: false,
        }
    });

    // ! SETUP COOKIE
    app.register(cookie, {
        parseOptions: {},
    })

    // ! SETUP Auth Decorator
    app.decorate("authenticate", async (request: FastifyRequest, reply: FastifyReply) => {


        // Verify app token
        try {
            const user = await request.jwtVerify<{
                _id: string;
            }>();

            request.user = user;
        } catch (error) {
            return reply.send(error);
        }
    })
    return app;
}

export default createServer;