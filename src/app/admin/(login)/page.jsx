"use client";

import { FaRegUser } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { login } from "@/services/LoginService";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await login(username, password);

      if(!res.ok) {
        throw new Error(res.message);
      }

      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main className=" min-h-screen bg-white flex flex-col justify-between">
      <section id="login" className="flex flex-1 items-center justify-center">
        {/* CARD */}
        <div className="bg-[#F5F5F5] w-full max-w-117 rounded-2xl p-1">
          <form
            className="p-10 flex flex-col gap-10
              bg-white rounded-2xl shadow-xl/10 border border-neutral-200
            "
            onSubmit={handleLogin}
          >
            {/* LOGO */}
            <div className="flex justify-center">
              <div className="w-16 h-16 px-4 rounded-xl flex items-center justify-center shadow-xl/10 bg-white">
                <span className="text-3xl px-3 font-semibold text-background">
                  IOU
                </span>
              </div>
            </div>

            {/* TITLE */}
            <div className="text-center flex flex-col gap-2">
              <h3 className="">Welcome Back!</h3>
              <p className="text-[1rem] normal-case">
                Sign in to manage your content
              </p>
            </div>

            {/* FORM */}
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your username"
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full h-12.25 px-12 rounded-full border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-300"
                />
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground/30">
                  <FaRegUser />
                </span>
              </div>

              {/* PASSWORD */}
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Your password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12.25 px-12 rounded-full border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-300"
                />

                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-400">
                  <FiLock />
                </span>

                <span 
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </div>
            </div>

            {/* MESSAGE ERROR */}
            {
              error &&
              <p className="normal-case font-black bg-red-200 text-red-400 p-2 border-l-8 border-foreground/20">
                {error}
              </p>
            }

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full h-12.25 rounded-full bg-primary text-white font-medium hover:bg-teal-800 transition"
            >
              Sign In
            </button>
          </form>

          {/* FOOTER */}
          <div className="flex justify-center gap-2.5 text-xs text-neutral-500 px-6 py-2.5">
            Forgot password?{" "}
            <span className="text-neutral-900 font-medium cursor-pointer">
              Contact administrator
            </span>
          </div>
        </div>
      </section>
      <footer className="flex justify-between px-10 pb-2 text-sm font-light text-[#181818]/60">
        <span>© 2026 IOU Studio</span>

        <div className="flex gap-4">
          <span>All rights Reserved</span>
          <span>Privacy Policy</span>
        </div>
      </footer>
    </main>
  );
}
