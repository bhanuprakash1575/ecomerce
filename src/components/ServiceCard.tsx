import type { IconType } from "react-icons";

interface ServiceCardProps {
  Logo: IconType;
  title: string;
  description: string;
}

export default ({ Logo, title, description }: ServiceCardProps) => {
  return (
    <div className="flex flex-col justify-center gap-2 items-center">
      <Logo
        size={72}
        color="white"
        style={{
          border: "6px solid var(--neutral-color)",
          backgroundColor: "black",
          padding: "12px",
          borderRadius: "50%",
        }}
      />
      <p className="font-bold">{title}</p>
      <p className="font-extralight text-sm">{description}</p>
    </div>
  );
};
