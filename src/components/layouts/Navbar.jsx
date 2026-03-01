"use client"

import Link from "next/link";
import { List, X} from "phosphor-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import LocalInfo from "@/components/ui/localInfo";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="top-0 left-0 right-0 bg-foreground backdrop-blur-xl">
      <div className="w-full flex items-center justify-between px-6 md:px-10 border border-black h-20">
        <div className="flex items-center text-base">
          <div>
          {/* Logo */}
            <Link href="/" className="text-xl font-semibold tracking-wide">
              <Image 
                src="/images/CompanyLogo.png"
                alt="Logo Image IOU"
                width={40}
                height={40}
                className="h-auto w-12 object-cover"
              />
            </Link>
          </div>
          <div className="pl-20">
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-6 text-sm tracking-wide">
              <Link href="/about" className="text-background transition-colors opacity-60 hover:opacity-100">
                ABOUT
              </Link>
              <Link href="/works" className="text-background transition-colors opacity-60 hover:opacity-100">
                WORKS
              </Link>
            </nav>
          </div>
        </div>

        {/* Right Info Desktop */}
        <div className="text-background hidden md:flex items-center gap-6">
          <LocalInfo />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 rounded-full border border-border bg-background">
                <List className="w-6 h-6" width={14} height={14}/>
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full h-screen bg-black text-white border-none p-8 flex flex-col justify-between
                [&>button]:hidden
              ">
              <SheetHeader className="hidden">
                <SheetTitle>
                  Title
                </SheetTitle>
              </SheetHeader>
              {/* TOP AREA */}
              <div>
                <div className="flex items-center justify-between mb-16">
                  <span className="text-xl font-semibold tracking-wide">
                    IOU
                  </span>
                  <SheetClose asChild>
                    <button
                      className="
                        w-10 h-10
                        p-0
                        rounded-full
                        bg-neutral-200
                        flex items-center justify-center
                        transition-all duration-300
                        hover:bg-white
                        hover:scale-105
                      "
                    >
                      <X className="w-4 h-4 text-black" strokeWidth={1.5} />
                    </button>
                  </SheetClose>
                </div>

                {/* Main Menu */}
                <nav className="flex flex-col gap-8 text-4xl tracking-wide">
                  <Link href="/" className="opacity-80 hover:opacity-100 transition">
                    HOME
                  </Link>
                  <Link href="/about" className="opacity-80 hover:opacity-100 transition">
                    ABOUT
                  </Link>
                  <Link href="/works" className="opacity-80 hover:opacity-100 transition">
                    WORKS
                  </Link>
                </nav>
              </div>

              {/* BOTTOM AREA */}
              <div className="space-y-10 text-sm">
                <div>
                  <p className="mb-3 uppercase tracking-widest text-xs opacity-60">
                    MAIN OFFICE
                  </p>
                  <p className="opacity-70 leading-relaxed">
                    SEMAMPIR BARAT 18,<br />
                    SURABAYA 60119<br />
                    EAST JAVA, INDONESIA
                  </p>
                </div>
                <div>
                  <p className="mb-3 uppercase tracking-widest text-xs opacity-60">
                    CONTACT
                  </p>
                  <div className="flex flex-wrap gap-6 opacity-70">
                    <span>EMAIL</span>
                    <span>INSTAGRAM</span>
                    <span>BEHANCE</span>
                    <span>LINKEDIN</span>
                  </div>
                </div>
                <div className="flex justify-between text-xs opacity-60 pt-6 border-t border-white/10">
                  <span>ALL RIGHTS RESERVED.</span>
                  <span>PRIVACY POLICY</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
