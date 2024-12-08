import { createTRPCRouter, publicProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  test: publicProcedure.query(async ({ ctx }) => {
    return { Hello: "There" };
  }),
  users: publicProcedure.query(async ({ ctx }) => {
    const users = await ctx.drizzle.query.users.findMany();
    return users[0];
  }),
});
