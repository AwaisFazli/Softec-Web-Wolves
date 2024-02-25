import React from "react";
import { Navigate } from "react-router-dom";
import { getCookie } from "../../services/CookieManager";

export const ProtectedRoute = ({ children, redirectTo }) => {
  const user = getCookie("userAccessToken")

  if (!user) {
    return <Navigate to={"/signup"} replace />;
  }

  return children;
};
