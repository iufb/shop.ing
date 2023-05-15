import { Carousel, News, ProductNav } from "@/components";
import { WithLayout } from "@/layout/Layout";
import { getCarouselItems } from "@/utils/api-client";
import { ICarouselItem } from "@/utils/types/carouselItem.interface";
import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
const Market = ({
  carouselData,
}: {
  carouselData: ICarouselItem[];
}): JSX.Element => {
  return (
    <div className="col mt-4 gap-4">
      <ProductNav />
      <h2 className="text-2xl text-gray-500 uppercase font-bold">
        Хиты продаж
      </h2>
      <Carousel carouselItems={carouselData} />
      <News />
    </div>
  );
};
export default WithLayout(Market);
export const getStaticProps: GetStaticProps<{
  carouselData: ICarouselItem[];
}> = async () => {
  const carouselData: ICarouselItem[] = await getCarouselItems().then(
    (data) => {
      const carouselItems = data;
      if (typeof carouselItems !== "boolean") return JSON.parse(carouselItems);
    }
  );
  return {
    props: {
      carouselData,
    },
  };
};
