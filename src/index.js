// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import OurServicesPage from "./components/OurServicesPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "OurServices",
//     element: <OurServicesPage />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./components/HomePage";
import OurServicesPage from "./components/OurServicesPage";
import AboutUsPage from "./components/AboutUsPage";
import ContactUsPage from "./components/ContactUsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "our-services",
        element: <OurServicesPage />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
      },
      // Add more routes as needed
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
