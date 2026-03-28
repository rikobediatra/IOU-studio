import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const CustomButton = ({ className, children, ...props }) => {
  return (
    <button
      className={cn(
        "rounded-full transition-all normal-case flex items-center gap-2 cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
