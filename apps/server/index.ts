import cors from "cors";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { exampleRouter } from "./api/routers/example";
import { createTRPCContext, createTRPCRouter } from "./api/trpc";

const appRouter = createTRPCRouter({
  example: exampleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
  createContext: createTRPCContext,
});

server.listen(3000);
