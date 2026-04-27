"use client";

import CardWorks from "@/components/ui/cardWorks";
import Link from "next/link";

import { CaretRight } from "phosphor-react";

export default function MainWorks({ listProjects = [] }) {
  return (
    <section
      id="works-pages"
      className="min-h-dvh w-full"
    >
      {/* BREADCRUMBS */}
      <div className="pt-36 pb-11.25 border-b-2 border-[#BCBFC8]">
        <h2>WORKS</h2>
        <div className="uppercase flex flex-row gap-3 items-center pt-6">
          <p className="text-foreground/40 text-[1rem]"><Link href="/">Home</Link></p>
          <span>
            <CaretRight />
          </span>
          <p className="text-foreground text-[1rem]">Works</p>
        </div>
      </div>

      {/* LIST OF WORKS */}
      <div className=" py-30 flex gap-x-10 gap-y-14 flex-wrap">
        {listProjects.map((project, index) => {
          const sequenceNumber = listProjects.length - index;
          const displayId = `P-${sequenceNumber.toString().padStart(4, "0")}`;
          return (
            <Link
              key={project._id}
              className="w-110.75"
              href={`/works/detail/${project._id}`}
            >
              <CardWorks
                work={project}
                displayId={displayId}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}