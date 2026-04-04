import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function CustomInput({
  className,
  children,
  type,
  placeholder,
  onChange,
}) {
  return (
    <div className="relative">
      {children}
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={cn(
          `h-17.25 p-6 rounded-[24px] bg-white border border-[#DDDDDD] text-black font-normal text-base
          placeholder:text-base placeholder:text-black/20
          `,
          className,
        )}
      />
    </div>
  );
}
