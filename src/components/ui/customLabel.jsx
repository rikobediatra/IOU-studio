import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function CustomLabel({ className, children, ...props }) {
  return (
    <div
      className={cn(
        `bg-[#FAFAFA] border border-[#DDDDDD] text-black/60 rounded-[24px] px-6 py-4 
        text-base font-medium tracking-[-2%]`,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
