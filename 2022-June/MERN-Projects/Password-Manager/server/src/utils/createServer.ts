import fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import fs from "fs";
import path from "path";
import { CORS_ORIGIN } from "../constants";
function createServer() {

    const app = fastify();

    app.register(cors, {
        origin: CORS_ORIGIN,
        credentials: true
    });

    app.register(jwt, {
        secret: {
            private: fs.readFileSync(`${(path.join(process.cwd), "certs")}/private.key`),
        }
    })

    return app;
}

export default createServer;