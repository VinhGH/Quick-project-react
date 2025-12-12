import React, { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Initialize from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem("userInfo");
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUserInfo(parsedUser);
                setIsAuthenticated(true);
            } catch (error) {
                console.error("Failed to parse stored user info:", error);
                localStorage.removeItem("userInfo");
            }
        }
    }, []);

    // Login function
    const loginUser = async (email, password) => {
        try {
            // TODO: Replace with actual API call
            // For now, using mock authentication

            // Simulate API call delay
            await new Promise((resolve) => setTimeout(resolve, 500));

            // Mock validation
            if (!email || !password) {
                toast.error("Email and password are required");
                return false;
            }

            // Mock user data - replace with actual API response
            const mockUser = {
                id: 1,
                email: email,
                name: email.split("@")[0],
                role: email.includes("admin") ? "admin" : "user",
            };

            // Store user info
            setUserInfo(mockUser);
            setIsAuthenticated(true);
            localStorage.setItem("userInfo", JSON.stringify(mockUser));

            toast.success("Login successful!");
            return true;
        } catch (error) {
            console.error("Login error:", error);
            toast.error("Login failed. Please try again.");
            return false;
        }
    };

    // Logout function
    const logoutUserContext = () => {
        setUserInfo(null);
        setIsAuthenticated(false);
        localStorage.removeItem("userInfo");
        toast.success("Logged out successfully");
    };

    // Get user role
    const role = userInfo?.role || null;

    const value = {
        userInfo,
        isAuthenticated,
        role,
        loginUser,
        logoutUserContext,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
