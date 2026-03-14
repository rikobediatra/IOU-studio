"use client"
import { typeWorkDetail } from "@/utils/enums";
import Image from "next/image";

export default function WorksDescription({ section, detail }) {
  if (!detail) return null;

  return (
    <section 
      id={typeWorkDetail[section]} 
      className="border-4 border-red-500 p-10 flex flex-col gap-10"
    >
      <h3>
        {typeWorkDetail[section]}
      </h3>
      {detail.images && 
        <div className="relative w-full h-130 max-h-180 overflow-hidden rounded-xl">
          <Image
            alt={detail.paragraph}
            src={detail.images}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-contain"
          />
        </div>
      }
      <h4 
        className="text-[1rem]"
      >
        {detail.paragraph}
      </h4>
      <p className="border-l border-[#BCBFC8] pl-2.5 md:max-w-80">
        {detail.subParagraph}
      </p>
    </section>
  );
}
