"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    if (users[username] === password) {
      localStorage.setItem("currentUser", username);
      router.push("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  const goToRegister = () => {
    router.push("/register");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="p-8 bg-gray-800 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl mb-4 font-bold text-center">Login</h1>

        <input
          className="w-full p-2 mb-4 bg-gray-700 border border-gray-600 rounded"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full p-2 mb-4 bg-gray-700 border border-gray-600 rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-600 hover:bg-green-700 p-2 rounded mb-4"
        >
          Login
        </button>

        <button
          onClick={goToRegister}
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
}
