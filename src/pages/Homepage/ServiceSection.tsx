import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsShieldCheck } from "react-icons/bs";
import ServiceCard from "../../components/ServiceCard";

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
