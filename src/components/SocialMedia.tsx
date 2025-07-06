import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

type SocialMediaLinks = "fb" | "insta" | "x" | "ln";

const LinkComps = {
  fb: <FaFacebookF />,
  x: <FaTwitter />,
  insta: <FaInstagram />,
  ln: <FaLinkedinIn />,
};

export default function SocialMedia({
  links = ["fb", "x", "insta", "ln"],
}: {
  links?: SocialMediaLinks[];
}) {
  return (
    <div className="flex gap-4">
      {links.map((val) => {
        return LinkComps[val];
      })}
    </div>
  );
}
