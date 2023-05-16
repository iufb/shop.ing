import { cartMobile, slideAnimation } from "@/utils/motion";
import { CartProps } from "./Cart.props";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui";
import { AiOutlineClose } from "react-icons/ai";
import { useCart } from "@/hooks/useCart";
import { CartItem } from "./CartItem/CartItem";
import { TotalPrice } from "./TotalPrice/TotalPrice";
const Cart = ({ className, isMobile, ...props }: CartProps): JSX.Element => {
  const { toggleCart, products, totalPrice } = useCart();
  return (
    <div
      className={`${className} absolute z-30 overflow-hidden left-0 top-0   grid w-full  h-screen bg-white bg-opacity-60`}
      {...props}
    >
      <motion.div
        className=" lg:w-[400px] lg:mt-0 lg:h-screen lg:rounded-none w-[350px] md:w-[95%] relative border h-[90vh] mt-[85px] rounded-t-3xl    col gap-3 justify-self-center  lg:justify-self-end bg-white  p-5 "
        {...(isMobile ? cartMobile : slideAnimation("right"))}
      >
        <Button
          type="icon"
          className="absolute  top-2 right-2"
          onClick={() => toggleCart(false)}
        >
          <AiOutlineClose className="m-2 w-5 h-6 hover:fill-white" />
        </Button>
        <h1 className="text-2xl text-gray-600 text-start">Cart:</h1>
        <div
          className={` lg:h-[700px] h-[500px] flex-1   overflow-y-scroll mb-4 ${
            products.length == 0 && "center"
          } `}
        >
          {products.length > 0 ? (
            <div className="px-3 mt-2 col gap-2 ">
              {products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <h2 className="text-gray-300 text-2xl">Cart is empty</h2>
          )}
        </div>
        <TotalPrice
          total={products.length > 0 ? totalPrice : "0"}
          className="mt-4"
        />
        <Button type="primary" onClick={() => {}}>
          Purchase
        </Button>
      </motion.div>
    </div>
  );
};
export default Cart;
