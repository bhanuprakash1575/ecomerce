export default function Promobanner() {
  return (
    <div className=" bg-black text-white ">
      <div className="container mx-auto  flex">
        <p className=" flex flex-1  text-center  justify-center gap-2">
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>
          <span className="ml-2 underline cursor-pointer">Shop Now</span>
        </p>
        <p className=" ml-auto flex items-center gap-1 cursor-pointer">
          <span>English</span>
          <i className="fa-solid fa-angle-down"></i>
        </p>
      </div>
    </div>
  );
}
