import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import Detalhes from "../pages/details";
import Dashboard from "../pages/dashboard/myCars";
import NewCar from "../pages/dashboard/new";
import Login from "../pages/register/login";
import Register from "../pages/register/register";

export const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detalhes/:id",
        element: <Detalhes />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/new",
        element: <NewCar />,
      },
    ],
  },
  {
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
