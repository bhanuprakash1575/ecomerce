import Searchbar from "./Searchbar";
import { IoMdSend } from "react-icons/io";
import SocialMedia from "./SocialMedia";
import { Link, useLocation } from "react-router";
import { useEffect } from "react";

export default function Footer() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // or 'smooth' for smooth scrolling
    });
  }, [pathname]);

  return (
    <footer className="bg-black text-white flex justify-evenly py-14 mt-12">
      <div>
        <p className="group-title">Exclusive</p>
        <ul>
          <li>Subscribe</li>
          <li className="text-xs font-extralight">
            Get 10%off on your first order
          </li>
          <li>
            <Searchbar
              placeholder="Enter your email"
              className="border border-white rounded"
              Icon={<IoMdSend />}
            />
          </li>
        </ul>
      </div>
      <div className="w-1/8 ">
        <p className="group-title">Support</p>
        <ul className="">
          <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
          <li>exclusive@gmail.com</li>
          <li>+88015-88888-9999</li>
        </ul>
      </div>
      <div>
        <p className="group-title">Account</p>
        <ul>
          <Link to="/myaccount">My Account</Link>
          <Link to="/signup">Login / Register</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/">Shop</Link>
        </ul>
      </div>
      <div>
        <p className="group-title">Quick Link</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms Of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <p className="group-title">Download App</p>
        <ul>
          <li>Save $3 with App New User Only</li>
          <li className="grid grid-cols-2 grid-rows-2 h-24 items-start">
            <img
              className="size-30 row-span-2 h-full"
              src="/qrcode.jpg"
              alt="ar"
            />
            <img
              className="size-35 object-cover h-full scale-x-110"
              src="/playstore.png"
              alt="playstore"
            />
            <img
              className="size-35 object-cover h-full"
              src="/appstore.png"
              alt="appstore"
            />
          </li>
          <li>
            <SocialMedia />
          </li>
        </ul>
      </div>
    </footer>
  );
}
