import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import FancyButton from "../../components/FancyButton";
import Searchbar from "../../components/Searchbar";

export default function ContactPage() {
  return (
    <main className="container flex gap-3 p-8">
      <div className="w-1/3 fancy-shadow px-8 py-12">
        <ul className="flex flex-col gap-3 pb-8 border-b">
          <li className="flex items-center gap-2">
            <div className="bg-[var(--myred)] p-2 rounded-full">
              <FiPhone color="white" size={18} />
            </div>
            Call To Us
          </li>
          <li>We are available 24/7, 7 days a week.</li>
          <li>Phone: +919010805443</li>
        </ul>
        <ul className="pt-8 flex flex-col gap-3">
          <li className="flex items-center gap-2">
            <div className="bg-[var(--myred)] p-2 rounded-full">
              <CiMail color="white" size={20} />
            </div>
            Write To Us
          </li>
          <li>Fill out our form and we will contact you within 24 hours.</li>
          <li>Emails: customer@gmail.com</li>
          <li>Emails: support@gmail.com</li>
        </ul>
      </div>
      <div className="w-2/3 fancy-shadow flex flex-col items-end px-8 py-12 gap-3">
        <div className="flex gap-3 w-full">
          <Searchbar
            placeholder="Enter your Name"
            className="border border-white rounded bg-[var(--secondary-color)]"
          />
          <Searchbar
            placeholder="Enter your email"
            className="border border-white rounded bg-[var(--secondary-color)]"
          />
          <Searchbar
            placeholder="Enter your Phone"
            className="border border-white rounded bg-[var(--secondary-color)]"
          />
        </div>
        <textarea
          placeholder="Your Meassage"
          className="flex-1 p-2  bg-[var(--secondary-color)] h-full w-full"
          name=""
          id=""
        ></textarea>
        <div>
          <FancyButton>Send Meassage</FancyButton>
        </div>
      </div>
    </main>
  );
}
