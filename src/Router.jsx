import { createBrowserRouter } from "react-router";
import React from 'react'
import MainLayouts from "./layouts/MainLayouts";
import Home from "./pages/Home";
import AuthLayout from "./layouts/AuthLayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AllMovies from "./pages/AllMovies";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/movies",
        element: <AllMovies></AllMovies>
      },
      {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
          { path: "/auth/signup", element: <Signup></Signup> },
          { path: "/auth/login", element: <Login></Login> }
        ]
      }
    ]
  },
]);

export default Router;