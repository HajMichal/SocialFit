import { exampleRouter } from "./api/routers/example";
import {
  createTRPCContext,
  createTRPCRouter,
  publicProcedure,
} from "./api/trpc";
import { createBunServeHandler } from "trpc-bun-adapter";

const appRouter = createTRPCRouter({
  example: exampleRouter,
  ping: publicProcedure.query(() => "pong"),
});

// export type definition of API
export type AppRouter = typeof appRouter;

const bunHandler = createBunServeHandler(
  {
    router: appRouter,
    createContext: createTRPCContext,
    // onError: console.error,
    responseMeta() {
      return {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Content-Type": "application/json",
        },
      };
    },
    batching: {
      enabled: true,
    },
  },
  {
    port: 3000,
  }
);

const server = Bun.serve(bunHandler);

console.log(`Listening on http://localhost:${server.port}`);
