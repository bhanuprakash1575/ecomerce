import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";

import { accountItems } from "../constants";
import Searchbar from "./Searchbar";


const navItems = {
  Home: "", // Home links to the root path
  Contact: "contact",
  About: "about",
  "Sign Up": "signup",
};


export default function Navbar() {
  
  return (
    <header className="container pt-7 pb-4 mb-4  border-b flex items-center justify-between">
      <p className="text-2xl">Exclusive</p>
      <nav className="flex items-center gap-20">
        {Object.entries(navItems).map(([key, value]) => (
          <NavItem key={key} text={key} linktext={value} />
        ))}
      </nav>
      <div className="flex items-center gap-6">
        <Searchbar
          placeholder="What are you looking for?"
          className="bg-[var(--secondary-color)]"
          Icon={<CiSearch size={28} />}
        />
        <Link to="/wishlist">
          <FancyNavIcon Comp={<CiHeart size={36} />} />
        </Link>
        <Link to="/cart">
          <FancyNavIcon Comp={<IoCartOutline size={36} />} />
        </Link>
        <MyAccount />
      </div>
    </header>
  );
}

const NavItem = ({ key, text, linktext }: Record<string, string>) => (
  <NavLink
    key={key}
    to={`/${linktext}`}
    className={({ isActive }) => (isActive ? "nav-active" : "")}
  >
    {text}
  </NavLink>
);

const MyAccount = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef?.current?.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        id="dropdownButton"
        className={`${
          showDropdown && "bg-red-400 text-white"
        } p-2 rounded-full focus:outline-none`}
      >
        <LuUser
          size={36}
          onClick={() => {
            setShowDropdown(!showDropdown);
          }}
        />
      </button>

      <div
        id="dropdownMenu"
        className={` ${
          !showDropdown && "hidden"
        } absolute right-0 mt-2 w-64 rounded-lg shadow-lg bg-[var(--neutral-color)]/30 backdrop-blur-lg text-white p-4 z-50`}
      >
        {
          accountItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              onClick={() => setShowDropdown(false)}
              className="flex items-center gap-3 p-2 hover:bg-white/10 rounded cursor-pointer"
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.text}</span>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

const FancyNavIcon = ({ Comp }: any) => {
  const count = 0;
  return (
    <div className="relative">
      {Comp}
      <p
        className={`h-5 rounded-full translate-x-1/4 -translate-y-1/4 text-white w-5 bg-[var(--myred)] border text-center flex items-center justify-center absolute top-0 right-0 text-lg ${
          count.toLocaleString().length == 1 ? "text-xs" : "text-[8px]"
        }`}
      >
        {count}
      </p>
    </div>
  );
};
