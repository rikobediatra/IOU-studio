
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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
                priority
                className="object-cover"
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
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <SheetHeader className="hidden">
                <SheetTitle>
                  Title
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-8 mt-20 text-lg">
                <Link href="/about">ABOUT</Link>
                <Link href="/works">WORKS</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
