import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCookie } from "../../services/CookieManager";

export const AdminProtected = ({ children, redirectTo }) => {
  const role = getCookie("userAdminRole")

  if (role !== "admin") {
    return <Navigate to={redirectTo || "/"} replace />;
  }

  return children;
};
