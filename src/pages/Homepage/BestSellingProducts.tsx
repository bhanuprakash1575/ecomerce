import HeaderTitle from "../../components/HeaderTitle";
import FancyButton from "../../components/FancyButton";
import Productitem from "../../components/Productitem";

export default function BestSellingProducts() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="container">
      <HeaderTitle
        title="This Month"
        heading="Best Selling Products"
        SpecialComp={null}
        LastComp={<FancyButton text="View All" />}
      />
      <div
        className="flash-sale--products mt-6 flex overflow-x-auto gap-4"
      >
        {items.map((_, i) => (
          <Productitem key={i} />
        ))}
      </div>
    </div>
  );
}
