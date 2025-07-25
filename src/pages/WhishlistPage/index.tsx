import HeaderTitle from "../../components/HeaderTitle";
import FancyButton from "../../components/FancyButton";
import Productitem from "../../components/Productitem";

export default function WishlistPage() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <main className="container">
      <div className="mt-16">
        <HeaderTitle
          heading="Wishlist"
          LastComp={<FancyButton btnType="secondary">Move All To Bag</FancyButton>}
        />
        <div className="flash-sale--products mt-10 flex overflow-x-auto gap-4">
          {items.map((_, i) => (
            <Productitem key={i} />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <HeaderTitle
          title="Just For You"
          LastComp={<FancyButton btnType="secondary">View All</FancyButton>}
        />
        <div className="flash-sale--products mt-10 flex overflow-x-auto gap-4">
          {items.map((_, i) => (
            <Productitem key={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
