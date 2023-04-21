import { PrivateRoute } from "./privateRoute";
import { Dashboard, SignIn } from "@/app/pages";
import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";

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
