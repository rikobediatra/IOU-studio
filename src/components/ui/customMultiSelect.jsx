"use client";

import { MultiSelect } from "./multiSelect";

export default function CustomMultiSelect() {
  const options = [
    { value: "industrialDesign", label: "Industrial Design" },
    { value: "modeling", label: "Modeling" },
    { value: "prototyping", label: "Prototyping" },
    { value: "finishing", label: "Finishing" },
  ];

  return (
    <>
      <MultiSelect
        className="px-6 py-4.75 rounded-full text-[12px] font-light opacity-60 w-full"
        options={options}
        onValueChange={(selected) => console.log(selected)}
        animationConfig={{
          badgeAnimation: "bounce",
          popoverAnimation: "scale",
          optionHoverAnimation: "glow",
        }}
        maxCount={5}
      />
    </>
  );
}
