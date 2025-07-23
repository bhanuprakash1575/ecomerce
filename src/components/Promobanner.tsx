export default function Promobanner() {
  return (
    <div className=" bg-black text-white ">
      <div className="container mx-auto  flex">
        <div className=" flex flex-1  text-center  justify-center gap-2">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <p className="ml-2 underline cursor-pointer">Shop Now</p>
        </div>
        <p className=" ml-auto flex items-center gap-1 cursor-pointer">
          <span>English</span>
          <i className="fa-solid fa-angle-down"></i>
        </p>
      </div>
    </div>
  );
}
