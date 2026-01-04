import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

const ProtectedRoute = ({ children, role: requiredRole }) => {
  const { userInfo, role } = useContext(AuthContext);
  if (!userInfo) {
    return <Navigate to="/login" />;
  }
  if (role !== requiredRole) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
