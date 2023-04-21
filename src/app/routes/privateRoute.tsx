import { Navigate } from "react-router-dom";

type RouteProps = {
  children: any;
};

export function PrivateRoute(props: RouteProps) {
  const { children } = props;
  let storagedData = localStorage.getItem("@aircnc:user");
  let parsedStorageData =
    storagedData === null ? null : JSON.parse(storagedData);
  console.log(parsedStorageData);
  return parsedStorageData !== null ? children : <Navigate to={"/"} replace />;
}
