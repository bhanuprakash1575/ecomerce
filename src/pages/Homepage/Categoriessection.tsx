import { useRef } from "react";
import { BsPhone } from "react-icons/bs";
import HeaderTitle from "../../components/HeaderTitle";
import Scrollbuttons from "../../components/Scrollbuttons";


export default function Categoriessection() {

  const categories = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="container pb-14 border-b ">
      <HeaderTitle
        title="Categories"
        heading="Browse By Category"
        SpecialComp={null}
        LastComp={<Scrollbuttons scrollRef={scrollRef}/>}
        />

      <div ref={scrollRef} className="flex overflow-x-scroll gap-4 mt-8">
        {categories.map((_, i) => (
          <CategoryItem key={i} />
        ))}
      </div>
    </section>
  );
}


const CategoryItem = () => {
  return (
    <div className="cursor-pointer border w-fit flex flex-col justify-center items-center min-w-[170px] h-36 cat">
      <BsPhone className="" size={48} />
      <p className="mt-4">phones</p>
    </div>
  );
};