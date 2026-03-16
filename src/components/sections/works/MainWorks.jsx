"use client"

import CardWorks from "@/components/ui/cardWorks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CaretRight } from "phosphor-react";

export default function MainWorks({ listWorks }) {
  const router = useRouter();

  return (
    <section
      id="works-pages"
      className="min-h-dvh w-full"
    >
      {/* BREADCRUMBS */}
      <div className="pt-36 pb-11.25">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listWorks.map((work, index) => {
          return (
            <div
              key={work.id}
              onClick={() => router.push(`/works/detail/${work.id}`)}
            >
              <CardWorks
                work={work}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}