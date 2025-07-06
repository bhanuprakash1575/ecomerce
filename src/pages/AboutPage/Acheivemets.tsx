import { TbTruckDelivery } from "react-icons/tb";
import ServiceCard from "../../components/ServiceCard";

export default function Acheivemets() {
  return (
    <div className=" flex gap-4 justify-between">
      <div className="border p-8">
        <ServiceCard
          Logo={TbTruckDelivery}
          title="FREE AND FAST DELIVERY"
          description="Free delivery for all orders over $140"
        />
      </div>
      <div className="border p-8">
        <ServiceCard
          Logo={TbTruckDelivery}
          title="FREE AND FAST DELIVERY"
          description="Free delivery for all orders over $140"
        />
      </div>
      <div className="border p-8">
        <ServiceCard
          Logo={TbTruckDelivery}
          title="FREE AND FAST DELIVERY"
          description="Free delivery for all orders over $140"
        />
      </div>
      <div className="border p-8">
        <ServiceCard
          Logo={TbTruckDelivery}
          title="FREE AND FAST DELIVERY"
          description="Free delivery for all orders over $140"
        />
      </div>
    </div>
  );
}
