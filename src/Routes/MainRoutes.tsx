import React from "react";
import { useRoutes } from "react-router-dom";
import { Store } from "../pages/Store";
import { Cart } from "../pages/Cart";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Store /> },
    { path: "/cart", element: <Cart /> },
  ]);
};
