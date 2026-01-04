import React, { useState, useEffect } from "react";
import { Tablepost } from "@/components/TablePost";
import { DialogDelete } from "@/components/DialogDelete";
import { GetAllBlog, DeleteBlog } from "@/services/api/blog";
import { toast } from "react-hot-toast";

const MyPost = () => {
  const [posts, setPosts] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);
  const [deletePostId, setDeletePostId] = useState(null);

  const openDialog = (id) => {
    setDeletePostId(id);
    setOpenDelete(true);
  };

  const handleDelete = async () => {
    try {
      await DeleteBlog(deletePostId);
      setPosts((prev) => prev.filter((post) => post._id !== deletePostId));
      setOpenDelete(false);
      toast.success("Blog deleted successfully!");
    } catch (err) {
      const message = err?.response?.data?.message || "Lỗi khi xóa blog!";
      toast.error(message);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await GetAllBlog();
      const allPosts = response.data.items;
      //Lấy author id từ local storage với key userInfo => { "user": { "id": "68d7934b7c76684841165c1e", "role": "admin", "email": "admin@gmail.com", "username": "Admin" } }
      const authorId = JSON.parse(localStorage.getItem("userInfo")).user.id;
      setPosts(allPosts.filter((post) => post.author._id === authorId));
    } catch (err) {
      console.error("Lỗi khi tải blog:", err);
      setPosts([]);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const titleToDelete = posts.find((p) => p._id === deletePostId)?.title;

  return (
    <div>
      <Tablepost posts={posts} openDialog={openDialog} />

      <DialogDelete
        open={openDelete}
        setOpen={setOpenDelete}
        blogTitle={titleToDelete}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default MyPost;
