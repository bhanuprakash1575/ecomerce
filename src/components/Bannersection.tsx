  // Bannersection.tsx
  import { Swiper, SwiperSlide } from "swiper/react";
  import { Pagination, Autoplay } from "swiper/modules";

  // Styles
  // import "swiper/css";
  // import "swiper/css/pagination";

  // import "swiper/swiper-bundle.min.css";
  // // or
  // import "swiper/swiper.min.css";
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/autoplay";




  export default function Bannersection({CompArray}:any) {
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
