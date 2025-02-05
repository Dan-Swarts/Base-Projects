import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

import {
  AboutPage,
  ConversationPage,
  ErrorPage,
  HomePage,
  JourneyPage,
  ProjectsPage,
} from "./pages/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "About",
        element: <AboutPage />,
      },
      {
        path: "Conversation",
        element: <ConversationPage />,
      },
      {
        path: "Journey",
        element: <JourneyPage />,
      },
      {
        path: "Projects",
        element: <ProjectsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
