import Timer from "../../components/Timer";
import Productitem from "../../components/Productitem";
import { useRef } from "react";
import HeaderTitle from "../../components/HeaderTitle";
import Scrollbuttons from "../../components/Scrollbuttons";
export default function Flashsalesection() {
    const scrollRef = useRef<HTMLDivElement>(null)

    const items = [1,2,3,4,5,6]
  return (
    <div className="container border-b pb-12 ">
      <HeaderTitle
        title="Today's"
        heading="Flash Sales"
        SpecialComp={<Timer/>}
        LastComp={<Scrollbuttons scrollRef={scrollRef}/>}
      />
      <div
        ref={scrollRef}
        className="flash-sale--products mt-6 flex overflow-x-auto gap-4"
      >
        {items.map((_, i) => (
          <Productitem key={i} />
        ))}   
      </div>
      <div className="bg-[var(--myred)] text-white py-3 px-6 w-fit rounded mt-6 mx-auto">View All Products</div>
    </div>
  );
}
