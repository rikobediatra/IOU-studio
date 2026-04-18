"use client"
import { typeWorkDetail } from "@/utils/enums";
import Image from "next/image";

export default function WorksDescription({ section, detail }) {
  if (!detail) return null;

  return (
    <section 
      id={typeWorkDetail[section]} 
      className="px-10 lg:px-0 py-10 flex flex-col gap-10"
    >
      <h3>
        {typeWorkDetail[section]}
      </h3>
      {detail.image.url !== '' && 
        <div className="relative w-full h-130 max-h-180 overflow-hidden rounded-xl">
          <Image
            alt={detail.paragraph}
            src={detail.image.url}
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
      <p className="border-l border-[#BCBFC8] pl-2.5 md:max-w-xl">
        {detail.subParagraph}
      </p>
    </section>
  );
}
