import type { IconType } from "react-icons";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsShieldCheck } from "react-icons/bs";

export default function ServiceSection() {
  return (
    <section className="container flex justify-evenly   ">
      <ServiceCard
        Logo={TbTruckDelivery}
        title="FREE AND FAST DELIVERY"
        description="Free delivery for all orders over $140"
      />
      <ServiceCard
        Logo={TfiHeadphoneAlt}
        title="FREE AND FAST DELIVERY"
        description="Free delivery for all orders over $140"
      />
      <ServiceCard
        Logo={BsShieldCheck}
        title="FREE AND FAST DELIVERY"
        description="Free delivery for all orders over $140"
      />
    </section>
  );
}

interface ServiceCardProps {
    Logo : IconType,
    title : string,
    description : string

}

const ServiceCard = ({Logo, title, description} : ServiceCardProps) => {
  return (
    <div className="flex flex-col justify-center gap-2 items-center">
      <Logo size={72} color="white" style={{border:"6px solid var(--neutral-color)", backgroundColor:"black", padding: "12px", borderRadius:"50%"}}/>
      <p className="font-bold">{title}</p>
      <p className="font-extralight text-sm">{description}</p>
    </div>
  );
};
