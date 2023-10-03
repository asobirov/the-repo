"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";

import superjson from "superjson";

export function ReactQueryProvider({
  children
}: {
  children: React.ReactNode;
  headers?: Headers;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      }),
  );

  return (
      <QueryClientProvider client={queryClient}>
        <ReactQueryStreamedHydration transformer={superjson} queryClient={queryClient} children={children}/>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  );
}