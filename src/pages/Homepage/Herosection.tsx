import Bannersection from "../../components/Bannersection";

export default function Herosection() {
  const BannerArray = [
    <img src="/po_iphone_2020.png" className="" alt="Slide 1" />,
    <img src="/po_iphone_2020.png" className="" alt="Slide 1" />,
  ];

  return (
    <div className="container flex">
      <ul className="pt-6 border-r min-w-1/4 flex flex-col gap-4">
        <li className="flex items-center justify-between w-1/2">
          <p>Woman's Fashion</p>
          <i className="fa-solid fa-greater-than scale-75"></i>
        </li>
        <li className="flex items-center justify-between w-1/2">
          <p>Men's Fashion</p>
          <i className="fa-solid fa-greater-than scale-75"></i>
        </li>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby's & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
      </ul>
      <Bannersection CompArray={BannerArray} />
    </div>
  );
}
