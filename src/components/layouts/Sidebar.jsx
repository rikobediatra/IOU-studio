"use client";

import logo from "../../assets/icons/logo.svg";
import Image from "next/image";
import { ArrowLineLeft, ArrowLineRight, SignOut } from "phosphor-react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { useLoading } from "@/context/LoadingContext";
import { logout } from "@/services/LoginService";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Sidebar({ children }) {
  const [isCollapse, setIsCollapse] = useState(false);
  const { setLoading } = useLoading();
  const router = useRouter();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await logout();
      if (!res.success) {
        throw new Error(res.message);
      }
      router.push("/admin");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const iconToggelSidebar = () => {
    if (isCollapse) {
      return (
        <ArrowLineRight
          className="cursor-pointer"
          onClick={() => setIsCollapse(!isCollapse)}
          size={14}
        />
      );
    }

    return (
      <ArrowLineLeft
        className="cursor-pointer"
        onClick={() => setIsCollapse(!isCollapse)}
        size={14}
      />
    );
  }

  return (
    <div
      className="min-h-screen flex
      "
    >
      {/* SIDEBAR */}
      <aside
        id="sidebar"
        className={`
          ${isCollapse ? "w-25.5" : "w-68"} 
          sticky top-0 h-screen p-4 
          flex flex-col justify-between transition-all duration-300 ease-in-out
        `}
      >
        <div>
          <div className={`
            flex items-center mb-7.5 justify-between
            ${isCollapse ? 'gap-2.5' : ''}
          `}>
            <Image
              alt="logo iou studio"
              src={logo}
              height={24}
              width="auto"
              unoptimized
              onClick={() => router.push("/admin")}
            />
            { iconToggelSidebar() }
          </div>
          <menu>
            <div
              className={`bg-white border border-secondary px-3 py-3.25 rounded-full 
                flex items-center gap-2 text-sm font-medium cursor-pointer
                ${isCollapse ? "justify-center" : "" }
              `}
              onClick={() => router.push("/admin")}
            >
              <IoBriefcaseOutline />
              <span className={`
                ${isCollapse ? "hidden" : "block"} 
                overflow-hidden transition-all duration-300
              `}>
                Portfolio
              </span>
            </div>
          </menu>
        </div>

        {/* Logout button */}
        <button
          className={`
            group bg-[#F5F5F5] hover:bg-white rounded-full text-sm font-normal normal-case px-3 py-3.25 
            flex items-center gap-2 w-full cursor-pointer hover:font-medium
            ${isCollapse ? "justify-center" : "" }
          `}
          onClick={handleLogout}
        >
          <SignOut 
            className="opacity-60 group-hover:opacity-100 "
            size={14}
          />
          <span className={`
            ${isCollapse ? "hidden" : "block"}
          `}>
            Logout
          </span>
        </button>
      </aside>
      {/* NAVBAR */}
      <main className="p-4 flex-1 flex flex-col">
        <nav
          id="navbar"
          className="min-h-13.25 flex justify-between items-center"
        >
          <div>
            <h4 className="font-medium text-lg normal-case">
              Design Studio Dashboard
            </h4>
            <p className="font-normal text-sm normal-case">
              Welcome back, let&apos;s have a great productive day!
            </p>
          </div>
          <div className="flex items-center gap-6 bg-white pl-4 pr-6 py-2.5 rounded-full shadow-sm">
            <div className="w-8 h-8 rounded-2xl border border-[#DDDDDD] flex items-center justify-center">
              <CiUser
                size={14}
              />
            </div>
            <p className="normal-case font-normal">Admin</p>
          </div>
        </nav>
        {children}
      </main>
    </div>
  );
}
