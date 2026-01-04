import React, { useState, useContext } from "react";
import RegisterCard from "@/components/RegisterCard";
// import { AuthContext } from "@/contexts/authContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { register } from "@/services/api/auth";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (email, username, password) => {
    if (!email) {
      toast.error("Email is required");
      return;
    }
    if (!username) {
      toast.error("Username is required");
      return;
    }
    if (!password) {
      toast.error("Password is required");
      return;
    }
    setLoading(true);
    try {
      const result = await register({ email, username, password });
      setLoading(false);
      toast.success("Đăng ký thành công! Vui lòng đăng nhập.");
      if (result) {
        navigate("/");
      }
    } catch (error) {
      console.error("Lỗi khi đăng ký:", error);
      toast.error("Không thể đăng ký. Vui lòng thử lại!");
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[linear-gradient(90deg,rgba(2,0,36,1)_0%,#5044e5_35%,rgba(0,212,255,1)_100%)]">
      <RegisterCard
        email={email}
        username={username}
        password={password}
        setEmail={setEmail}
        setUsername={setUsername}
        setPassword={setPassword}
        loading={loading}
        handleSubmit={handleRegister}
      />
    </div>
  );
}
