import SocialMedia from "../../components/SocialMedia";
import Bannersection from "../../components/Bannersection";

export default function MembersSection() {
  return (
    <div>
      <Bannersection
        CompArray={[
          <CarasoulComp />,
          <CarasoulComp />,
          <CarasoulComp />,
          <CarasoulComp />,
        ]}
      />
    </div>
  );
}

const CarasoulComp = () => {
  return (
    <div className="flex justify-between pb-8">
      <MemberComp />
      <MemberComp />
      <MemberComp />
    </div>
  );
};

const MemberComp = () => {
  return (
    <div className="h-150">
      <img
        className="bg-[var(--secondary-color)] h-5/6 mb-4 pt-4 px-8"
        src="/person.png"
        alt="person"
      />
      <div className="flex flex-col gap-1">
        <p className="text-3xl">Tom Cruise</p>
        <p className="font-light">Founder & Chairman</p>
        <SocialMedia links={["x", "insta", "ln"]} />
      </div>
    </div>
  );
};
