import { CarouselItemProps } from "./CarouselItem.props";
import Image from "next/image";
import { Loader } from "../../ui";
export const CarouselItem = ({
  product,
  className,
  ...props
}: CarouselItemProps): JSX.Element => {
  return (
    <div
      className={`${className} w-full  col center border p-3 rounded-md shadow`}
      {...props}
    >
      <Image
        src={product.url}
        alt="product image"
        width={155}
        height={125}
        priority
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <h2 className="text-md text-gray-800 font-bold uppercase text-center w-full truncate ">
        {product.title}
      </h2>
      <h3 className="text-lg text-red-700 ">{product.price}</h3>
    </div>
  );
};
