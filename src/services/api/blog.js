import api from "./index";

export const GetAllBlog = async (data) => {
  return await api.get("/posts", data);
};

export const GetBlogById = async (id) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};

export const CreateBlog = async (data) => {
  return await api.post("/posts", data);
};

export const DeleteBlog = async (id) => {
  return await api.delete(`/posts/${id}`);
};
