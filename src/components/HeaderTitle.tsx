import { type JSX } from "react";

type HeaderTitleProps = {
  title?: string;
  heading?: string;
  SpecialComp?: JSX.Element | null;
  LastComp?: JSX.Element | null;
};

export default function HeaderTitle({
  title,
  heading,
  SpecialComp,
  LastComp,
}: HeaderTitleProps) {
  return (
    <div className="flex items-end gap-10">
      <div className="flex items-end gap-10 flex-1">
        <div>
          <Fancytitle title={title} />
          <p className="title">{heading}</p>
        </div>
        {SpecialComp}
      </div>
      {LastComp}
    </div>
  );
}

function Fancytitle({ title }: { title?: string }) {
  return (
    <div className="flex items-center gap-4 mb-3">
      {title && <div className="rectangle"></div>}
      <div className="fancy-title">{title}</div>
    </div>
  );
}
