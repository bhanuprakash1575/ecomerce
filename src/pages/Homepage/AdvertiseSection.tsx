import FancyButton from "../../components/FancyButton";


export default function AdvertiseSection() {
  return (
    <div className="bg-black text-white container flex px-14 ">
      <div className="w-1/3 flex flex-col items-start justify-center gap-8">
        <p className="">Categories</p>
        <p className="text-5xl">Enhance Your Music Experience</p>
        <div className="flex gap-x-4">
          <div className="w-20 h-20 bg-white text-black flex flex-col justify-center items-center rounded-full">
            <p className="text-lg font-semibold">23</p>
            <p className="text-sm">Days</p>
          </div>
          <div className="w-20 h-20 bg-white text-black flex flex-col justify-center items-center rounded-full">
            <p className="text-lg font-semibold">05</p>
            <p className="text-sm">Hours</p>
          </div>
          <div className="w-20 h-20 bg-white text-black flex flex-col justify-center items-center rounded-full">
            <p className="text-lg font-semibold">59</p>
            <p className="text-sm">Minutes</p>
          </div>
          <div className="w-20 h-20 bg-white text-black flex flex-col justify-center items-center rounded-full">
            <p className="text-lg font-semibold">35</p>
            <p className="text-sm">Seconds</p>
          </div>
        </div>
        <div>
          <FancyButton>Buy Now</FancyButton>
        </div>
      </div>
      <div className="relative w-2/3 flex justify-center items-center h-[500px] bg-black overflow-hidden rounded">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#e5e5e5]/40 blur-3xl"></div>
        <img src="/JBLSpeaker.png" alt="Speaker" className="relative z-10" />
      </div>
    </div>
  );
}
