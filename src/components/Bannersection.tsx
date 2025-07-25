  import { Swiper, SwiperSlide } from "swiper/react";
  import { Pagination, Autoplay } from "swiper/modules";

  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/autoplay";
import type { JSX } from "react";


  export default function Bannersection({CompArray}:{CompArray:JSX.Element[]}) {
    return (
      <div className="pt-6 pl-12 min-w-3/4">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className=""
        >
          {
            CompArray.map((Comp:any,i:any)=>{
              return(
                <SwiperSlide key={i}>
                  {Comp}
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    );
  }
