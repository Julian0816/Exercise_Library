import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import BeginnerCard from "./components/BeginnerCard";
import IntermediateCard from "./components/IntermediateCard";
import ExpertCard from "./components/ExpertCard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/beginner",
        element: <BeginnerCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/intermediate",
        element: <IntermediateCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/expert",
        element: <ExpertCard />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
