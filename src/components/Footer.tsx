import Searchbar from "./Searchbar";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

export default function Footer() {
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
              Icon={IoMdSend}
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
          <li>My Account</li>
          <li>Login / Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
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
              <img className="size-30 row-span-2 h-full" src="/qrcode.jpg" alt="ar" />
              <img className="size-35 object-cover h-full scale-x-110" src="/playstore.png" alt="playstore" />
              <img className="size-35 object-cover h-full" src="/appstore.png" alt="appstore" />
          </li>
          <li className="flex gap-4">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </li>
        </ul>
      </div>
    </footer>
  );
}
