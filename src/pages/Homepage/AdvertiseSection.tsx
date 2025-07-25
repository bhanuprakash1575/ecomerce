import FancyButton from "../../components/FancyButton";
import Timer from "../../components/Timer";


export default function AdvertiseSection() {
  return (
    <section className="bg-black text-white container flex px-14 ">
      <div className="w-1/3 flex flex-col items-start justify-center gap-8">
        <p className="">Categories</p>
        <p className="text-5xl">Enhance Your Music Experience</p>
        <Timer endDate={new Date("2025-09-01T00:00:00Z")} primary />
        <div>
          <FancyButton>Buy Now</FancyButton>
        </div>
      </div>
      <div className="relative w-2/3 flex justify-center items-center h-[500px] bg-black overflow-hidden rounded">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#e5e5e5]/40 blur-3xl"></div>
        <img src="/JBLSpeaker.png" alt="Speaker" className="relative z-10" />
      </div>
    </section>
  );
}
