import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { Dashboard } from "../pages/Dashboard";
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
