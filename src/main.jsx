import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import BeginnerCard from "./components/BeginnerCard";
import IntermediateCard from "./components/IntermediateCard";
import ExpertCard from "./components/ExpertCard";

import AbdominalsCard from "./components/AbdominalsCard";
import AbductorsCard from "./components/AbductorsCard";
import AdductorsCard from "./components/AdductorsCard";
import BicepsCard from "./components/BicepsCard";
import CalvesCard from "./components/CalvesCard";
import ChestCard from "./components/ChestCard";
import ForearmsCard from "./components/ForearmsCard";
import GlutesCard from "./components/GlutesCard";
import HamstringsCard from "./components/HamstringsCard";
import LatsCard from "./components/LatsCard";
import LowerBackCard from "./components/LowerBackCard";
import MiddleBackCard from "./components/MiddleBackCard";
import NeckCard from "./components/NeckCard";
import QuadricepsCard from "./components/QuadricepsCard";
import TrapsCard from "./components/TrapsCard";
import TricepsCard from "./components/TricepsCard";

import CardioCard from "./components/CardioCard";
import OlympicWeightliftingCard from "./components/OlympicWeightliftingCard";
import PlyometricsCard from "./components/PlyometricsCard";
import PowerliftingCard from "./components/PowerliftingCard";
import StrengthCard from "./components/StrengthCard";
import StrongmanCard from "./components/StrongmanCard";
import StretchingCard from "./components/StretchingCard";

import Index from "./components";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      
      { index: true, element: <Index /> },
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
      {
        path: "/abdominals",
        element: <AbdominalsCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/abductors",
        element: <AbductorsCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/adductors",
        element: <AdductorsCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/biceps",
        element: <BicepsCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/calves",
        element: <CalvesCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/chest",
        element: <ChestCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/forearms",
        element: <ForearmsCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/glutes",
        element: <GlutesCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/hamstrings",
        element: <HamstringsCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/lats",
        element: <LatsCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/lower_back",
        element: <LowerBackCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/middle_back",
        element: <MiddleBackCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/neck",
        element: <NeckCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/quadriceps",
        element: <QuadricepsCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/traps",
        element: <TrapsCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/triceps",
        element: <TricepsCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/cardio",
        element: <CardioCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/olympic_weightlifting",
        element: <OlympicWeightliftingCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/plyometrics",
        element: <PlyometricsCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/powerlifting",
        element: <PowerliftingCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/strength",
        element: <StrengthCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/stretching",
        element: <StretchingCard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/strongman",
        element: <StrongmanCard />,
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
