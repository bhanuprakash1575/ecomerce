import type { ReactNode } from "react";

type btnType = "primary" | "secondary" | "justText";

export default function FancyButton({
  className,
  children,
  btnType = "primary",
  handleClick
}: {
  className?: string;
  children: ReactNode;
  btnType?: btnType;
  handleClick?: () => void;
  
}) {
  const btnStyle = {
    "primary":"bg-[var(--myred)] text-white",
    "secondary":"text-black border",
    "justText":"text-[var(--myred)]"
  };
  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer ${btnStyle[btnType]} text-center py-3 px-6 h-fit w-fit rounded ${className}`}
    >
      {children}
    </button>
  );
}
  