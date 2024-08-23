import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Registration from "./components/registration/registration";
import MillStatus from "./components/MillStatus/MillStatus";
import Root from "./components/Root/Root";
import Home from "./components/home/Home";
import Login from "./components/Login/Login";
import OfficeLogin from "./components/OfficeLogin/OfficeLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/MillStatus",
        element: <MillStatus></MillStatus>,
      },
      {
        path: "/Office",
        element: <OfficeLogin></OfficeLogin>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
