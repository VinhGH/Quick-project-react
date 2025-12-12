import api from "./index";

export const login = async (data) => {
  return await api.post("/auth/login", data);
};

export const register = async (data) => {
  return await api.post("/auth/register", data);
};

export const logout = async () => {
  return await api.post("/auth/logout");
};

// Get current user profile
export const getCurrentUser = async () => {
  return await api.get("/auth/me");
};

// Update user profile
export const updateProfile = async (data) => {
  return await api.put("/auth/profile", data);
};

// Change password
export const changePassword = async (data) => {
  return await api.put("/auth/change-password", data);
};

export const forgotPassword = async (data) => {
  return await api.post("/auth/forgot-password", data);
};

export const resetPassword = async (data) => {
  return await api.post("/auth/reset-password", data);
};

export const refreshToken = async () => {
  return await api.post("/auth/refresh-token");
};
