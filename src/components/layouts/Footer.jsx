"use client"

import Link from "next/link"
import { ArrowRight, ArrowUp } from "phosphor-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-200 text-black px-6 md:px-16 pt-20 pb-6">
      {/* TOP SECTION */}
      <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between gap-10 mb-20">
        {/* LEFT TITLE */}
        <h2>
          CONTACT US
        </h2>

        {/* RIGHT CTA */}
        <div className="max-w-md flex flex-col">
          <h4 className="mb-6">
            READY TO DESIGN WHAT’S NEXT? <br />
            LET’S WORK TOGETHER.
          </h4>

          <button className="
            cursor-pointer bg-primary text-white mx-16 rounded-full hover:bg-primary transition
            flex flex-row justify-center items-center gap-4.5
            opacity-70 hover:opacity-100
          ">
            LET’S COLLABORATE <span><ArrowRight width={16} height={16} /></span>
          </button>
        </div>
      </div>

      {/* MIDDLE GRID */}
      <div className="flex flex-col gap-10 md:flex-row md:justify-between text-sm mb-10 uppercase">
        {/* GENERAL MENU */}
        <div className="flex items-start justify-between md:gap-10 lg:gap-20">
          <div className="font-normal text-base">
            <h4>GENERAL MENU</h4>
          </div>
          <div>
            <ul className="leading-[160%] text-sm font-light flex flex-col items-end gap-6 opacity-60">
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/about">ABOUT</Link></li>
              <li><Link href="/works">WORKS</Link></li>
            </ul>
          </div>
        </div>

        {/* CONTACT */}
        <div className="flex items-start justify-between md:gap-10 lg:gap-20">
          <div className="font-normal text-base">
            <h4>Contact</h4>
          </div>
          <div>
            <ul className="leading-[160%] text-sm font-light flex flex-col items-end gap-6 opacity-60">
              <li><a href="#">EMAIL</a></li>
              <li><a href="#">INSTAGRAM</a></li>
              <li><a href="#">BEHANCE</a></li>
              <li><a href="#">LINKEDIN</a></li>
            </ul>
          </div>
        </div>

        {/* MAIN OFFICE */}
        <div className="flex items-start justify-between md:gap-10 lg:gap-20">
          <div className="font-normal text-base">
            <h4>Main Office</h4>
          </div>
          <div className="leading-[160%] text-sm font-light opacity-60 flex flex-col items-end">
            <p>SEMAMPIR BARAT 18,</p>
            <p>SURABAYA 60119</p>
            <p>EAST JAVA, INDONESIA</p>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t-2 border-foreground- text-foreground opacity-60">
        <div className="grid grid-cols-2 grid-rows-2 p-0 gap-4">
          <p>© 2025 LOU STUDIO</p>
          <div
            className="
              col-span-2 col-start-1 row-start-2
              md:col-span-1 md:col-start-1 md:row-start-2
          ">
            <div className="flex flex-row justify-between items-center md:justify-start md:gap-10">
              <p>ALL RIGHTS RESERVED.</p>
              <p>PRIVACY POLICY</p>
            </div>
          </div>
          <div
            className="
              col-start-2 row-start-1 my-auto ml-auto
              md:row-span-2 md:col-start-2 md:row-start-1
          ">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center px-0 gap-2 float-right leading-[160%] text-sm font-light
                hover:text-black transition cursor-pointer
              ">
              GO BACK UP <span><ArrowUp size={14}/></span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
