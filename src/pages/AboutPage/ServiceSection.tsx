import ServiceCard from "../../components/ServiceCard";
import { TbTruckDelivery } from "react-icons/tb";

export default function ServiceSection() {
  return (
    <section className="flex justify-evenly ">
      <ServiceCard
        Logo={TbTruckDelivery}
        title="FREE AND FAST DELIVERY"
        description="Free delivery for all orders over $140"
      />
      <ServiceCard
        Logo={TbTruckDelivery}
        title="FREE AND FAST DELIVERY"
        description="Free delivery for all orders over $140"
      />
      <ServiceCard
        Logo={TbTruckDelivery}
        title="FREE AND FAST DELIVERY"
        description="Free delivery for all orders over $140"
      />
    </section>
  );
}
