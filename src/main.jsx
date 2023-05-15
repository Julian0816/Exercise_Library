import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import LevelCard from "./components/BeginnerCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/beginner",
        element: <Root />,
        errorElement: <LevelCard />,
      },
      {
        path: "/intermediate",
        element: <Root />,
        errorElement: <LevelCard />,
      },
      {
        path: "/expert",
        element: <Root />,
        errorElement: <LevelCard />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
