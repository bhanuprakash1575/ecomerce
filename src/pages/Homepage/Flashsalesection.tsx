import Timer from "../../components/Timer";
import Productitem from "../../components/Productitem";
import { useRef } from "react";
import HeaderTitle from "../../components/HeaderTitle";
import Scrollbuttons from "../../components/Scrollbuttons";
import FancyButton from "../../components/FancyButton";
export default function Flashsalesection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const items = [1, 2, 3, 4, 5, 6];
  return (
    <section className="container border-b pb-12 ">
      <HeaderTitle
        title="Today's"
        heading="Flash Sales"
        SpecialComp={<Timer endDate={new Date("2025-08-15T00:00:00")} />}
        LastComp={<Scrollbuttons scrollRef={scrollRef} />}
      />
      <div
        ref={scrollRef}
        className="flash-sale--products mt-6 flex overflow-x-auto gap-4"
      >
        {items.map((_, i) => (
          <Productitem key={i} />
        ))}
      </div>
      <FancyButton className="mx-auto mt-6">View All Products</FancyButton>
    </section>
  );
}
