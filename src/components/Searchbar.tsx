import type { IconType } from "react-icons";

interface SearchbarProps{
  className:string,
  placeholder : string,
  Icon : IconType
}

export default function Searchbar({className, placeholder, Icon}:SearchbarProps) {
  return (
    <div className={`p-2 min-w-[243px] flex justify-between items-center ${className}`}>
      <input className="flex-1 font-light" placeholder={placeholder} type="text" name="searchtext" id="searchtext" />
      <Icon />
    </div>
  );
}
