import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";
import { SignIn } from "@/app/pages/SignIn";
import { Dashboard } from "@/app/pages/Dashboard";
import { PrivateRoute } from "./privateRoute";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route index element={<SignIn />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Switch>
    </BrowserRouter>
  );
}
