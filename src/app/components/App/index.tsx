import React from "react";
import GlobalStyles from "@/app/assets/styles/global";
import { Routes } from "@/app/routes/index";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <React.Fragment>
      <Routes />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <GlobalStyles />
    </React.Fragment>
  );
}
