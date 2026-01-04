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
import Watchlist from "./pages/Watchlist";
import ErrorPage from "./components/ErrorPage";
import DashboardPage from "./pages/DashBoardPage";
import PrivacyTerms from "./pages/PrivacyTerms";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";

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
        element: <MovieDetails></MovieDetails>
      },
      {
        path:"/privacy",
        element: <PrivacyTerms></PrivacyTerms>
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      },
      {
        path: "/my-profile",
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
          { path: "/auth/signup", element: <Signup></Signup> },
          { path: "/auth/login", element: <Login></Login> }
        ],
        errorElement: <ErrorPage></ErrorPage>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardPage></DashboardPage></PrivateRoute> ,
    children: [
      {
        path: "/dashboard/movies/add",
        element: <AddMovie></AddMovie>
      },
      {
        path: "/dashboard/movies/update/:id",
        element: <UpdateMovie></UpdateMovie>
      },
      {
        path: "/dashboard/movies/my-collection",
        element:<MyCollection></MyCollection>
      },

      {
        path: "/dashboard/movies/watchlist",
        element: <Watchlist></Watchlist>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  },

]);

export default Router;