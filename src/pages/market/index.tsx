import { Carousel, News, ProductNav } from "@/components";
import { WithLayout } from "@/layout/Layout";
const Market = (): JSX.Element => {
  return (
    <div className="col mt-4 gap-4">
      <ProductNav />
      <h2 className="text-2xl text-gray-500 uppercase font-bold">
        Хиты продаж
      </h2>
      <Carousel />
      <News />
    </div>
  );
};
export default WithLayout(Market);
