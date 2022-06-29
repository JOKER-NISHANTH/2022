import { FastifyInstance } from "fastify";
import createServer from "./utils/createServer";
import { disconnectFromDB } from "./utils/db";
import logger from "./utils/logger";

function gracefulShutdown(signal: string, app: FastifyInstance) {
    process.on(signal,
        async () => {
            logger.info(`Good Bye , got signal ${signal}`);

            app.close();

            await disconnectFromDB();

            logger.info(`My Work is done`);
            process.exit(0);
        }
    );
}

async function main() {
    const app = createServer();
    const PORT = 4000;
    const HOST = "0.0.0.0";
    try {
        const url = await app.listen({ port: PORT, host: HOST });
        logger.info(`Server is ready at ${url}`)
    } catch (e) {
        logger.error(e);
        process.exit(1)
    }

    const signals = ["SIGTERM", "SIGINT"];

    for (let i = 0; i < signals.length; i++) {
        gracefulShutdown(signals[i], app);
    }
}
main();