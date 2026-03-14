"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, CaretRight } from "phosphor-react";

export default function DetailWorks({ detailWork }) {
  return (
    <section className="relative h-dvh bg-foreground">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={detailWork.images}
          alt="Hero Background"
          fill
          priority
          unoptimized
          className="object-cover"
        />
      </div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 text-background bg-[#181818]/40">
        {/* CONTENT */}
        <div className="relative z-10 flex h-full flex-col justify-end px-6 md:px-10 pb-10 pt-24">
          <div className="flex flex-row items-center gap-10">
            <h1>
              {detailWork.title}
            </h1>
            <button className="flex items-center justify-center w-12 h-12 px-0 py-0 rounded-full bg-white text-black cursor-pointer">
              <ArrowDown className="hover:scale-150" width={14} height={14} />
            </button>
          </div>
          {/* BREADCRUMBS */}
          <div>
            <div className="uppercase flex flex-row gap-3 items-center pt-6">
              <p className="text-background/40 text-[1rem]">
                <Link href="/">Home</Link>
              </p>
              <span>
                <CaretRight />
              </span>
              <p className="text-background/40 text-[1rem]">
                <Link href="/works">works</Link>
              </p>
              <span>
                <CaretRight />
              </span>
              <p className="text-background text-[1rem]">
                {detailWork.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
