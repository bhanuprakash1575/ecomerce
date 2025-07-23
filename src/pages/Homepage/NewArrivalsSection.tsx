import HeaderTitle from "../../components/HeaderTitle";

export default function NewArrivalsSection() {
  return (
    <div className="container">
      <HeaderTitle
        title="Featured"
        heading="New Arrival"
        SpecialComp={null}
        LastComp={null}
      />
      <div className="arrival-section">
        <ArrivalCard
          className={"image1"}
          image={"/ps5.png"}
          imageClassName=""
          title="Play Station 5"
          description="Black and White version of the PS5 coming out on sale."
        />
        <ArrivalCard
          className={"image2"}
          image="/hat.jpg"
          imageClassName="rotate-y-180"
          title="Women's Collection"
          description="Featured woman collections that give you another vibe."
        />
        <ArrivalCard
          className={"image3"}
          image="/speakers.png"
          imageClassName="rotate-y-180"
          title="Speakers"
          description="Amazon wireless speakers"
        />
        <ArrivalCard
          className={"image4"}
          image="/perfume.png"
          imageClassName="rotate-y-180"
          title="Perfume"
          description="GUCCI INTENSE OUD EDP"
        />
      </div>
    </div>
  );
}

interface ArrivalCardProps {
  className ?: string,
  image: string;
  title: string;
  description: string;
  imageClassName?: string;
}

const ArrivalCard = ({
  className,
  image,
  title,
  description,
  imageClassName,
}: ArrivalCardProps) => {
  return (
    <div className={`bg-black w-fit relative grid ${className}`}>
      <img className={`h-full place-items-center ${imageClassName}`} src={image} alt="PS5" />
      <div className="flex flex-col gap-3 w-[250px] text-white absolute left-10 bottom-10">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-sm font-extralight">{description}</p>
        <p className="border-b cursor-pointer border-white w-fit">Shop Now</p>
      </div>
    </div>
  );
};
