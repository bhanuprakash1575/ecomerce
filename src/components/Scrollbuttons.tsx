import { type RefObject } from 'react'

export default function Scrollbuttons({scrollRef}:{scrollRef : RefObject<HTMLDivElement | null> | null}) {
     const scrollLeft = () => {
       scrollRef?.current?.scrollBy({ left: -900, behavior: "smooth" });
     };

     const scrollRight = () => {
       scrollRef?.current?.scrollBy({ left: 900, behavior: "smooth" });
     };
  return (
    <div>
      <button onClick={scrollLeft} className="rounded-arrows">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button onClick={scrollRight} className="rounded-arrows ml-2">
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>  
  );
}
