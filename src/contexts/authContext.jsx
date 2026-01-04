import React, { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { login as loginAPI, me as getMeAPI } from "../services/api/users";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo")) || null
  );
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Initialize from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    const accessToken = localStorage.getItem("accessToken");

    if (storedUser && accessToken) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUserInfo(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Failed to parse stored user info:", error);
        localStorage.removeItem("userInfo");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    }
  }, []);

  // Login function
  const loginUser = async (email, password) => {
    try {
      // Validate input
      if (!email || !password) {
        toast.error("Email and password are required");
        return false;
      }

      // Call the actual login API
      const response = await loginAPI(email, password);

      // Save tokens to localStorage
      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);

      // Get user info using the me endpoint
      const userData = await getMeAPI();

      // Store user info
      setUserInfo(userData);
      setIsAuthenticated(true);
      localStorage.setItem("userInfo", JSON.stringify(userData));

      toast.success("Login successful!");
      return true;
    } catch (error) {
      console.error("Login error:", error);
      const errorMessage =
        error.response?.data?.message || "Login failed. Please try again.";
      toast.error(errorMessage);
      return false;
    }
  };

  // Logout function
  const logoutUserContext = () => {
    setUserInfo(null);
    setIsAuthenticated(false);
    localStorage.removeItem("userInfo");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    toast.success("Logged out successfully");
  };

  // Get user role
  const role = userInfo?.role || null;
  console.log("🚀 ~ AuthContextProvider ~ role:", role);

  const value = {
    userInfo,
    isAuthenticated,
    role,
    loginUser,
    logoutUserContext,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
