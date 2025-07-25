import Herosection from "./Herosection";
import Categoriessection from "./Categoriessection";
import Flashsalesection from "./Flashsalesection";
import BestSellingProducts from "./BestSellingProducts";
import ExploreSection from "./ExploreSection";
import NewArrivalsSection from "./NewArrivalsSection";
import ServiceSection from "./ServiceSection";
import AdvertiseSection from "./AdvertiseSection";

export default function Homepage() {
  return (
    <main className="flex flex-col gap-12">
      <Herosection />
      <Flashsalesection />
      <Categoriessection />
      <BestSellingProducts />
      <AdvertiseSection />
      <ExploreSection />
      <NewArrivalsSection />
      <ServiceSection />
    </main>
  );
}
