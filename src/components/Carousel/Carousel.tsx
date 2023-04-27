import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselProps } from "./Carousel.props";
import "swiper/css";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import { getCarouselItems } from "@/utils/api-client";
import { ICarouselItem } from "@/utils/types/carouselItem.interface";
import { CarouselItem } from "./CarouselItem/CarouselItem";
export const Carousel = ({
  className,
  ...props
}: CarouselProps): JSX.Element => {
  const [carouselItems, setCarouselItems] = useState<ICarouselItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getCarouselItems().then((data) => {
      const carouselItems = data as string;
      setCarouselItems(JSON.parse(carouselItems[0]));
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={`${className} cursor-grab py-4  `} {...props}>
      <Swiper
        loopedSlides={8}
        loop={true}
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        className="w-full h-fit py-4"
      >
        {carouselItems.map((item) => (
          <SwiperSlide key={item.id}>
            <CarouselItem product={item} isLoading={isLoading} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
