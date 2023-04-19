import React from "react";
import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";
import { SignIn } from "../pages/SignIn";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route index element={<SignIn />} />
      </Switch>
    </BrowserRouter>
  );
}
