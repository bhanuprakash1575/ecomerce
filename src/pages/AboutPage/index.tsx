import HeroSection from "./HeroSection";
import Acheivemets from "./Acheivemets";
import MembersSection from "./MembersSection";
import ServiceSection from "./ServiceSection";

export default function AboutPage() {
  return (
    <div className="container flex flex-col gap-16">
      <HeroSection />
      <Acheivemets />
      <MembersSection />
      <ServiceSection />
    </div>
  );
}
