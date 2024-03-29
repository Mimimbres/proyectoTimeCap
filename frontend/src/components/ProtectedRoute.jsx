import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

function RequireAuth() {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.currentUser) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
}

export default RequireAuth;
