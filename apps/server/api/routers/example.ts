import { createTRPCRouter, publicProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  test: publicProcedure.query(async ({ ctx }) => {
    return { Hello: "There" };
  }),
});
