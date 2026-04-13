"use client";

import CustomLabel from "@/components/ui/customLabel";
import CustomInput from "@/components/ui/customInput";
import CustomImageUploader from "@/components/ui/customImageUploader";
import { useFormContext } from "react-hook-form";

export default function SectionForm({ name, title }) {
  const { register } = useFormContext();

  return (
    <section className="flex flex-col gap-4 pb-6 border-b border-[#DDDDDD]">
      <p className="opacity-60 normal-case font-medium text-[16px]">{title}</p>
      <div>
        <CustomLabel>Paragraph</CustomLabel>
        <CustomInput
          type="text"
          placeholder="Enter paragraph here..."
          className="w-full"
          {...register(`${name}.paragraph`)}
        />
      </div>
      <div>
        <CustomLabel>Sub Paragraph</CustomLabel>
        <CustomInput
          type="text"
          placeholder="Enter sub paragraph here..."
          className="w-full"
          {...register(`${name}.subParagraph`)}
        />
      </div>
      <div>
        <CustomLabel>Image</CustomLabel>
        <CustomImageUploader name={`${name}.image`}/>
      </div>
    </section>
  );
}
