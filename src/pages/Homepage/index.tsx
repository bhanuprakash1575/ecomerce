import Herosection from "../../components/Herosection";
import Categoriessection from "./Categoriessection";
import Flashsalesection from "./Flashsalesection";
import BestSellingProducts from "./BestSellingProducts"
import ExploreSection from "./ExploreSection";
import NewArrivalsSection from "./NewArrivalsSection";

export default function Homepage() {
  return (
    <div className="flex flex-col gap-12">
      <Herosection />
      <Flashsalesection />
      <Categoriessection />
      <BestSellingProducts/>
      <div className="container max-h-64 overflow-hidden">
        <img className="object-contain" src='/JBL.png' alt="JBL"/>
      </div>
      <ExploreSection/>
      <NewArrivalsSection />
    </div>
  );
}
