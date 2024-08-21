import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/home";
import Registration from "./components/registration/registration";
import MillStatus from "./components/MillStatus/MillStatus";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/MillStatus",
        element: <MillStatus></MillStatus>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
