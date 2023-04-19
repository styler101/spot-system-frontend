import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

type RouteProps = {
  children: any;
};

export function PrivateRoute(props: RouteProps) {
  const { children } = props;
  let storagedData = localStorage.getItem("@aircnc:user_id");
  return storagedData !== null ? children : <Navigate to={"/"} replace />;
}
