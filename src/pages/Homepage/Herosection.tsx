import Bannersection from "../../components/Bannersection";

export default function Herosection() {
  const BannerArray = [
    <img src="/po_iphone_2020.png" className="" alt="Slide 1" />,
    <img src="/po_iphone_2020.png" className="" alt="Slide 1" />,
  ];

  const catItems = ["Woman's Fashion", "Men's Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor", "Baby's & Toys", "Groceries & Pets", "Health & Beauty"];
  const MultiCatItems = ["Woman's Fashion", "Men's Fashion"];

  return (
    <section className="container flex">
      <ul className="pt-6 border-r min-w-1/4 flex flex-col gap-4">
      {
        catItems.map((item, index) => (
          <li key={index} className="flex items-center justify-between w-1/2">
            <p>{item}</p>
            {MultiCatItems.includes(item) && <i className="fa-solid fa-greater-than scale-75"></i>}
          </li>
        ))
      }
      </ul>
      <Bannersection CompArray={BannerArray} />
    </section>
  );
}
