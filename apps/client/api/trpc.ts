import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../apps/server";

export const trpc = createTRPCReact<AppRouter>();
