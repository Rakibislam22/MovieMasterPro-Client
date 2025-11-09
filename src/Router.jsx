import { createBrowserRouter } from "react-router";
import React from 'react'
import MainLayouts from "./layouts/MainLayouts";
import Home from "./pages/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
       {
        path: "/",
        element: <Home></Home>
       }
    ]
  },
]);

export default Router;