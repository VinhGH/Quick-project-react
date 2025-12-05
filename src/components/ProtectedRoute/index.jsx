import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

export default function ProtectedRoute({ children, role }) {
    const { userInfo } = useContext(AuthContext);

    if (!userInfo) {
        return <Navigate to="/login" replace />;
    }

    if (role && userInfo.role !== role) {
        return <Navigate to="/" replace />;
    }

    return children;
}
