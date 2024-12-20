import { initTRPC } from "@trpc/server";
import { db } from "../db/index";
import superjson from "superjson";
import type { CreateBunContextOptions } from "trpc-bun-adapter";
/**
 *
 * 1. CONTEXT
 *
 */
interface CreateContextOptions extends Partial<CreateBunContextOptions> {
  session: "SESSION TYPE" | null;
}

const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    drizzle: db,
    session: opts.session,
  };
};

export const createTRPCContext = (opts: CreateBunContextOptions) => {
  const session = "SESSION TYPE";
  const innterCtx = createInnerTRPCContext({ session });
  return createInnerTRPCContext({
    ...innterCtx,
    req: opts.req,
    resHeaders: opts.resHeaders,
  });
};
export type Context = Awaited<ReturnType<typeof createInnerTRPCContext>>;

/**
 *
 * 2. INITIALIZATION | ROUTERS | PROCEDURES
 *
 */

// [TODO]
//  - add errorFormatter to create options
const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: { ...superjson, input: superjson, output: superjson },
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
