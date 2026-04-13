"use client";

import { MultiSelect } from "./multiSelect";
import { Controller, useFormContext } from "react-hook-form";

export default function CustomMultiSelect({ name }) {
  const { control } = useFormContext();
  const options = [
    { value: "industrialDesign", label: "Industrial Design" },
    { value: "modeling", label: "Modeling" },
    { value: "prototyping", label: "Prototyping" },
    { value: "finishing", label: "Finishing" },
  ];

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <MultiSelect
            className="px-6 py-4.75 h-17.25 rounded-full text-[12px] font-light w-full"
            options={options}
            defaultValue={field.value || []}
            onValueChange={(val) => field.onChange(val)}
            animationConfig={{
              badgeAnimation: "bounce",
              popoverAnimation: "scale",
              optionHoverAnimation: "glow",
            }}
            maxCount={5}
          />
        )}
      />
    </>
  );
}
