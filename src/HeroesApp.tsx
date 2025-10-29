import React, { Children } from "react";
import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import FavouriteHeroProvider from "./heroes/context/favouriteHero";

interface Props {
  children: React.ReactNode;
}

// Create a client
const queryClient = new QueryClient();

export const HeroesApp = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <FavouriteHeroProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={appRouter} />
      </FavouriteHeroProvider>
    </QueryClientProvider>
  );
};
