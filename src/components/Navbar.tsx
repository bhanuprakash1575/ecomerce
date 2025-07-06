import Searchbar from "./Searchbar";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  return (
    <div className="container pt-7 pb-4 mb-4  border-b flex items-center justify-between">
      <p className="text-2xl">Exclusive</p>
      <ul className="flex items-center gap-20">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Sign Up</li>
      </ul>

      <div className="flex items-center gap-6">
        <Searchbar
          placeholder="What are you looking for?"
          className="bg-[var(--secondary-color)]"
          Icon={<CiSearch size={28} />}
        />
        <i className="fa-regular fa-heart scale-150"></i>
        <i className="fa-solid fa-cart-shopping scale-125"></i>
      </div>
    </div>
  );
}
