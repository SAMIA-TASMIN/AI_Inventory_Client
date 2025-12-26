import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const SlideCard = () => {
 const data = [
    { image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop" },
    { image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=1200&h=800&fit=crop" },
    { image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1200&h=800&fit=crop" },
    { image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=800&fit=crop" },
    { image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=1200&h=800&fit=crop" },
    { image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=800&fit=crop" }
  ];
   return (
    

    <div>
      <div className="max-w-7xl mx-auto py-10">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="rounded-2xl shadow-xl  h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]"
        >
         {
            data.map(img=> <SwiperSlide>
            <img
              src={img.image}
              alt="Pet Grooming"
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>)
         }

         

          
        </Swiper>
      </div>
    </div>
  );
};

export default SlideCard;