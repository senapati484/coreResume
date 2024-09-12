import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreatePdf } from "./create-pdf/index.jsx";
import { ViewPdf } from "./view-pdf/index.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-pdf",
    element: <CreatePdf />,
  },
  {
    path: "/view-pdf",
    element: <ViewPdf />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
