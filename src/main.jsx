import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";

// Import Error Page
import ErrorPage from "./error-page";

// Import Level Card Components
import BeginnerCard from "./components/levelComponents/BeginnerCard";
import IntermediateCard from "./components/levelComponents/IntermediateCard";
import ExpertCard from "./components/levelComponents/ExpertCard";

// Import Muscle Card Components
import AbdominalsCard from "./components/muscleComponents/AbdominalsCard";
import AbductorsCard from "./components/muscleComponents/AbductorsCard";
import AdductorsCard from "./components/muscleComponents/AdductorsCard";
import BicepsCard from "./components/muscleComponents/BicepsCard";
import CalvesCard from "./components/muscleComponents/CalvesCard";
import ChestCard from "./components/muscleComponents/ChestCard";
import ForearmsCard from "./components/muscleComponents/ForearmsCard";
import GlutesCard from "./components/muscleComponents/GlutesCard";
import HamstringsCard from "./components/muscleComponents/HamstringsCard";
import LatsCard from "./components/muscleComponents/LatsCard";
import LowerBackCard from "./components/muscleComponents/LowerBackCard";
import MiddleBackCard from "./components/muscleComponents/MiddleBackCard";
import NeckCard from "./components/muscleComponents/NeckCard";
import QuadricepsCard from "./components/muscleComponents/QuadricepsCard";
import TrapsCard from "./components/muscleComponents/TrapsCard";
import TricepsCard from "./components/muscleComponents/TricepsCard";

// Import Type Card Components
import CardioCard from "./components/typeComponents/CardioCard";
import OlympicWeightliftingCard from "./components/typeComponents/OlympicWeightliftingCard";
import PlyometricsCard from "./components/typeComponents/PlyometricsCard";
import PowerliftingCard from "./components/typeComponents/PowerliftingCard";
import StrengthCard from "./components/typeComponents/StrengthCard";
import StrongmanCard from "./components/typeComponents/StrongmanCard";
import StretchingCard from "./components/typeComponents/StretchingCard";

// Import Recipe Card Components
import Index from "./components";
import Meat from "./components/recipeComponents/Meat";
import Chicken from "./components/recipeComponents/Chicken";
import Fish from "./components/recipeComponents/Fish";
import Vegetarian from "./components/recipeComponents/Vegetarian";
import Vegan from "./components/recipeComponents/Vegan";
import RecipeSearch from "./components/recipeComponents/RecipeSearch";

// Impoer Pages
import About from "./pages/About";
import MusicPlayerSlider from "./pages/MusicPlayerSlider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/music",
            element: <MusicPlayerSlider />,
          },
          {
            path: "/beginner",
            element: <BeginnerCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/intermediate",
            element: <IntermediateCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/expert",
            element: <ExpertCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/abdominals",
            element: <AbdominalsCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/abductors",
            element: <AbductorsCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/adductors",
            element: <AdductorsCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/biceps",
            element: <BicepsCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/calves",
            element: <CalvesCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/chest",
            element: <ChestCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/forearms",
            element: <ForearmsCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/glutes",
            element: <GlutesCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/hamstrings",
            element: <HamstringsCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/lats",
            element: <LatsCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/lower_back",
            element: <LowerBackCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/middle_back",
            element: <MiddleBackCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/neck",
            element: <NeckCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/quadriceps",
            element: <QuadricepsCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/traps",
            element: <TrapsCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/triceps",
            element: <TricepsCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/cardio",
            element: <CardioCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/olympic_weightlifting",
            element: <OlympicWeightliftingCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/plyometrics",
            element: <PlyometricsCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/powerlifting",
            element: <PowerliftingCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/strength",
            element: <StrengthCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/stretching",
            element: <StretchingCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/strongman",
            element: <StrongmanCard />,
            // errorElement: <ErrorPage />,
          },
          {
            path: "/meat",
            element: <Meat />,
          },
          {
            path: "/chicken",
            element: <Chicken />,
          },
          {
            path: "/fish",
            element: <Fish />,
          },
          {
            path: "/vegetarian",
            element: <Vegetarian />,
          },
          {
            path: "/vegan",
            element: <Vegan />,
          },
          {
            path: "/search",
            element: <RecipeSearch />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//TODO Add some feedback to inform the user that the page is loading
