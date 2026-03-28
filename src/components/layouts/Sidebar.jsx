"use client";

import logo from "../../assets/icons/logo.svg";
import avatar from "../../assets/icons/avatar.svg";
import Image from "next/image";
import { ArrowLineLeft, SignOut } from "phosphor-react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { useLoading } from "@/context/LoadingContext";
import { logout } from "@/services/LoginService";
import { useRouter } from "next/navigation";

export default function Sidebar({ children }) {
  const { setLoading } = useLoading();
    const router = useRouter();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await logout();
      if(!res.success) {
        throw new Error(res.message);
      }
      router.push('/admin');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <div
      className="min-h-screen flex
      "
    >
      {/* SIDEBAR */}
      <aside
        id="sidebar"
        className="w-68 min-h-230 p-4 flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between mb-7.5">
            <Image
              alt="logo iou studio"
              src={logo}
              height={24}
              width="auto"
              unoptimized
            />
            <ArrowLineLeft size={14} />
          </div>
          <menu>
            <div className="bg-white border border-secondary px-3 py-3.25 rounded-full flex items-center gap-2 text-sm font-medium">
              <IoBriefcaseOutline />
              <span>Portfolio</span>
            </div>
          </menu>
        </div>

        {/* Logout button */}
        <button
          className="
            text-sm font-normal normal-case px-3 py-3.25 flex items-center gap-2 w-full
            cursor-pointer hover:font-medium
          "
          onClick={handleLogout}
        >
          <span><SignOut size={14}/></span>Logout
        </button>
      </aside>
      {/* NAVBAR */}
      <main className="p-4">
        <nav
          id="navbar"
          className="w-[calc(100dvw-272px)] min-h-13.25 flex justify-between"
        >
          <div>
            <h4 className="font-medium text-lg normal-case">
              Design Studio Dashboard
            </h4>
            <p className="font-normal text-sm normal-case">
              Lorem Ipsum Dolor Sit Amet
            </p>
          </div>
          <div className="flex items-center gap-6 bg-white pl-4 pr-6 py-2.5 rounded-full shadow-sm">
            <Image 
              alt="user"
              src={avatar}
              height={32}
              width="auto"
              unoptimized
              className="rounded-2xl"
            />
            <div>
              <p className="font-normal">Kevin Octa</p>
              <p className="text-[0.625rem]">Admin</p>
            </div>
          </div>
        </nav>
        {children}
      </main>
    </div>
  );
}
