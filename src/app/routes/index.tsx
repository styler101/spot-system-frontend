import React from "react";
import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { Dashboard } from "../pages/Dashboard";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route index element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Switch>
    </BrowserRouter>
  );
}
