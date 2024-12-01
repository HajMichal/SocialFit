import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import React, { useState } from "react";
import { trpc } from "./api/trpc";
import SuperJSON from "superjson";

const getBaseUrl = () => {
  // browser should use relative url
  if (typeof window !== "undefined") return "";

  // SSR should use api url
  if (process.env.API_URL) return process.env.API_URL;

  // dev SSR should use localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export function TrpcProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000",
          transformer: SuperJSON,
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
