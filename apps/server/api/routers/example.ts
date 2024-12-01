import { createTRPCRouter, publicProcedure } from "../trpc.ts";

export const exampleRouter = createTRPCRouter({
  test: publicProcedure.query(() => {
    return { Hello: "There" };
  }),
});
