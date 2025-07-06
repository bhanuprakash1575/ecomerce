import type { ReactNode } from "react";

export default function FancyButton({
  className,
  children,
  isPrimary = true,
}: {
  className?: string;
  children: ReactNode;
  isPrimary?: boolean;
}) {
  return (
    <div
      className={`${
        isPrimary ? "bg-[var(--myred)]  text-white" : " text-black border "
      } text-center py-3 px-6 w-fit rounded mt-6 mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
  