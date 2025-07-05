export default function Searchbar() {
  return (
    <div className="bg-[var(--secondary-color)] p-2 min-w-[243px] flex justify-between items-center">
      <input className="flex-1 font-light" placeholder="What are you looking for?" type="text" name="searchtext" id="searchtext" />
      <i className="fa-solid fa-magnifying-glass scale-125"></i>
    </div>
  );
}
