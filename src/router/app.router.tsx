import { AdminPage } from "@/admin/pages/AdminPage";
import { AdminLayout } from "@/admin/pages/layouts/AdminLayout";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage"));
const AdminLayout = lazy(() => import("@/admin/pages/layouts/AdminLayout"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "heroes/:idSlug",
        element: <HeroPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/heroes/1",
    element: <HeroPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
]);
