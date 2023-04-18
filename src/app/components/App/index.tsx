import React from "react";
import GlobalStyles from "@/app/assets/styles/global";
import { SignIn } from "@/app/pages/SignIn";

export function App() {
  return (
    <React.Fragment>
      <SignIn />
      <GlobalStyles />
    </React.Fragment>
  );
}
