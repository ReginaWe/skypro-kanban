/* import React from "react"; */
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

function PrivateRoute() {
  const { user } = useUser()
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;