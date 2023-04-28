import { Carousel, News, ProductNav } from "@/components";
import { WithLayout } from "@/layout/Layout";
import { getCarouselItems } from "@/utils/api-client";
import { ICarouselItem } from "@/utils/types/carouselItem.interface";
import { useEffect, useState } from "react";
const Market = (): JSX.Element => {
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
    <div className="col mt-4 gap-4">
      <ProductNav />
      <h2 className="text-2xl text-gray-500 uppercase font-bold">
        Хиты продаж
      </h2>
      <Carousel carouselItems={carouselItems} isLoading={isLoading} />
      <News />
    </div>
  );
};
export default WithLayout(Market);
