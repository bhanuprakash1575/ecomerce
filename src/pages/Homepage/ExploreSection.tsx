import FancyButton from "../../components/FancyButton";
import HeaderTitle from "../../components/HeaderTitle";
import Productitem from "../../components/Productitem";
import Scrollbuttons from "../../components/Scrollbuttons";

export default function ExploreSection() {
    const products = [1,2,3,4,5,6,7,8]
  return (
    <div className="container">
      <HeaderTitle
        title="Our Products"
        heading="Explore Our Products"
        SpecialComp={null}
        LastComp={<Scrollbuttons scrollRef={null}/>}
      />
      <div className="grid grid-cols-4 grid-rows-2 gap-8 m-8">
        {
            products.map((_,i)=><Productitem key={i}/>)
        }
      </div>
      <FancyButton text="View All Products"/>

    </div>
  );
}
