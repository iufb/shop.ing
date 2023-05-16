import { Carousel, News, ProductNav } from "@/components";
import { WithLayout } from "@/layout/Layout";
import { getCarouselItems } from "@/utils/api-client";
import { ICarouselItem } from "@/utils/types/carouselItem.interface";
import Head from "next/head";
import { useEffect, useState } from "react";
const Market = (): JSX.Element => {
  const [carouselItems, setCarouselItems] = useState<ICarouselItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getCarouselItems().then((data) => {
      const carouselItems = data;
      if (typeof carouselItems != "boolean")
        setCarouselItems(JSON.parse(carouselItems));
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Market</title>
      </Head>

      <div className="col mt-4 gap-4">
        <ProductNav />
        <h2 className="text-2xl text-gray-500 uppercase font-bold">
          Хиты продаж
        </h2>
        <Carousel carouselItems={carouselItems} isLoading={isLoading} />
        <News />
      </div>
    </>
  );
};
export default WithLayout(Market);
