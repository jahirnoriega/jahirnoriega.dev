import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About, { loader as jobsLoader } from "./pages/About";
import Craft, { loader as craftLoader } from "./pages/Craft";
import Projects, { loader as projectsLoader } from "./pages/Projects";
import ProjectInfo from "./pages/ProjectInfo";
import Certificates, {
  loader as loaderCertificate,
} from "./pages/Certificates";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFound from "./pages/NotFound";
import "./index.css";
import CraftPost from "./pages/CraftPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/about",
        element: <About />,
        loader: jobsLoader,
      },
      {
        path: "/craft",
        element: <Craft />,
        loader: craftLoader,
      },
      {
        path: "/craft/:postId",
        element: <CraftPost />,
        errorElement: <NotFound />,
        loader: craftLoader,
      },
      {
        path: "/projects",
        element: <Projects />,
        loader: projectsLoader,
      },
      {
        path: "/projects/:projectId",
        element: <ProjectInfo />,
        errorElement: <NotFound />,
        loader: projectsLoader,
      },
      {
        path: "/certificates/",
        element: <Certificates />,
        loader: loaderCertificate,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/projects/*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
