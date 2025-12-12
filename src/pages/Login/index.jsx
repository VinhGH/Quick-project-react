import React, { useState, useContext } from "react";
import LoginCard from "@/components/LoginCard";
import { AuthContext } from "@/contexts/authContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email) return toast.error("Email is required");
    if (!password) return toast.error("Password is required");
    setLoading(true);
    const success = await loginUser(email, password);
    setLoading(false);

    if (success) navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[linear-gradient(90deg,rgba(2,0,36,1)_0%,#5044e5_35%,rgba(0,212,255,1)_100%)]">
      <LoginCard
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        loading={loading}
        handleSubmit={handleLogin}
      />
    </div>
  );
}
