import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About, { loader as jobsLoader } from "./pages/About";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Projects, { loader as projectsLoader } from "./pages/Projects";
import ProjectInfo from "./pages/ProjectInfo";
import Certificates, {
  loader as loaderCertificate,
} from "./pages/Certificates";
import NotFound from "./pages/NotFound";

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
        element: <About />,
        loader: jobsLoader,
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
