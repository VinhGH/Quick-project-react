import api from "./index";

export const getAllUsers = async () => {
  return await api.get("/users");
};

export const login = async (email, password) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
};

export const me = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};

export const fetchUserProfile = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await api.delete(`/users/${userId}`);
  return response.data;
};
export const updateUserRole = async (userId, role) => {
  const response = await api.put(`/users/${userId}/role`, { role });
  return response.data;
};