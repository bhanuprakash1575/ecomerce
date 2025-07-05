  // Bannersection.tsx
  import { Swiper, SwiperSlide } from "swiper/react";
  import { Pagination, Autoplay } from "swiper/modules";

  // Styles
  import "swiper/css";
  import "swiper/css/pagination";

  export default function Bannersection() {
    return (
      <div className="pt-6 pl-12 min-w-3/4">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000 }}
          loop={true}
          className=""
        >
          <SwiperSlide>
            <img src="/po_iphone_2020.png" className="" alt="Slide 1" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/po_iphone_2020.png" className="" alt="Slide 2" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
