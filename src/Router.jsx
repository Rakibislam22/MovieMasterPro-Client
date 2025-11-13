import { createBrowserRouter } from "react-router";
import React from 'react'
import MainLayouts from "./layouts/MainLayouts";
import Home from "./pages/Home";
import AuthLayout from "./layouts/AuthLayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AllMovies from "./pages/AllMovies";
import MovieDetails from "./pages/MoviDetails";
import PrivateRoute from "./provider/PrivateRoute";
import AddMovie from "./pages/AddMovie";
import MyCollection from "./pages/MyCollection";
import UpdateMovie from "./pages/UpdateMovie";

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
        path: "/movies/:id",
        element:<MovieDetails></MovieDetails>
      },
      {
        path: "/movies/add",
        element: <PrivateRoute>
            <AddMovie></AddMovie>
        </PrivateRoute>
      },
      {
        path: "/movies/my-collection",
        element: <PrivateRoute>
            <MyCollection></MyCollection>
        </PrivateRoute>
      },
      {
        path: "/movies/update/:id",
        element: <PrivateRoute>
            <UpdateMovie></UpdateMovie>
        </PrivateRoute>
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