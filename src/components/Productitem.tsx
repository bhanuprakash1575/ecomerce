import Rating from "./Rating";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";

export default function Productitem() {
  return (
    <div>
      <div className="productitem w-2xs h-64 mb-4 overflow-hidden grid place-items-center p-14 bg-[var(--secondary-color)] relative">
        <img className="object-fit" src="/console.png" alt="console" />
        <p className="absolute bg-[var(--myred)] left-3 top-3 p-1 rounded text-white font-extralight">
          -40%
        </p>
        <div className="absolute top-3 right-3 flex flex-col items-center gap-2">
          <CiHeart size={38} className="bg-white rounded-full p-1" />
          <FiEye size={34} className="bg-white rounded-full p-[4px]" />
        </div>
        <div className="add-to-cart-btn">
          ADD TO CART
        </div>
      </div>
      <div>
        <p>HAVIT HV-G92 Gamepad</p>
        <p>
          <span className="price">$120</span>
          <span className="old-price">$160</span>
        </p>
        <div className="flex items-center gap-4">
          <Rating rating={3.5} />
          <p className="rating">(83)</p>
        </div>
      </div>
    </div>
  );
}
