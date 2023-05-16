import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselProps } from "./Carousel.props";
import "swiper/css";
import "swiper/css/scrollbar";
import { CarouselItem } from "./CarouselItem/CarouselItem";
import { Loader } from "../ui";
import { useEffect, useState } from "react";
import { useResize } from "@/hooks/useResize";
export const Carousel = ({
  className,
  carouselItems,
  isLoading,
  ...props
}: CarouselProps): JSX.Element => {
  const { size } = useResize();
  const [slidesPerView, setSlidesPerView] = useState(1);
  useEffect(() => {
    if (size == "mobile") return setSlidesPerView(1);
    else if (size == "tablet") return setSlidesPerView(2);
    else return setSlidesPerView(3);
  }, [size]);
  return (
    <div
      className={`${className} cursor-grab py-4 center ${
        isLoading && "w-full h-[250px] center"
      }  `}
      {...props}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <Swiper
          loopedSlides={8}
          loop={true}
          spaceBetween={50}
          slidesPerView={slidesPerView}
          onSlideChange={() => console.log("slide change")}
          className="w-full h-fit py-4"
        >
          {carouselItems.map((item) => (
            <SwiperSlide key={item.id}>
              <CarouselItem product={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};
