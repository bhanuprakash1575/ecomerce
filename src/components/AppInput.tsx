import type { JSX } from "react";

type inputbg = "primary" | "secondary";

interface AppInputProps {
  type: string;
  className?: string;
  placeholder?: string;
  Icon?: JSX.Element;
  label?: string;
  isRequired?: boolean;
  background?: inputbg;
}

export default function AppInput({
  type,
  label,
  placeholder,
  Icon,
  className,
  isRequired,
  background = "primary",
}: AppInputProps) {
  return (
    <div className="w-full">
      {label && (
        <p className="mb-1">
          {label}
          {isRequired && <span className="text-[var(--myred)]">*</span>}
        </p>
      )}
      <div
        className={`p-2 flex justify-between items-center w-full ${
          background == "primary" && "bg-[var(--secondary-color)]"
        } ${background == "secondary" && "border"} ${className}`}
      >
        <input
          className="flex-1 font-light w-full"
          placeholder={placeholder}
          type={type}
          name="searchtext"
          id="searchtext"
          min={1}
          defaultValue={type === "number" ? 1 : ""}
        />
        {Icon && Icon}
      </div>
    </div>
  );
}
