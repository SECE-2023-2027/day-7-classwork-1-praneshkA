"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    if (users[username]) {
      alert("User already exists!");
      return;
    }

    
    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registered successfully!");
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="p-8 bg-gray-800 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl mb-4 font-bold text-center">Register</h1>
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
          onClick={handleRegister}
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
}
