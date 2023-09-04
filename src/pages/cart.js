import Image from "next/image";
import Checkout from "../../public/checkout/CheckoutBanner.jpg";
import { useSelector } from "react-redux";
import CartItems from "@/components/CartItems";
import Header from "@/components/Header";
import { useRouter } from "next/router";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const router = useRouter();

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };
  return (
    <div className="w-full h-full  bg-gray-100  ">
      <Header />
      <div className="w-full h-[40vh] ">
        <Image className="h-full w-full" src={Checkout} alt="image" />
      </div>
      <h1 className="text-3xl font-bold p-4 shadow-sm">Shopping Cart</h1>
      {cart.length > 0 ? (
        <div className="grid grid-cols-4 p-4 gap-4">
          <div className="col-span-3">
            {cart?.map((item) => {
              return (
                <CartItems
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  price={item.price}
                  quantity={item.quantity}
                />
              );
            })}
          </div>
          <div className="sticky border bg-white h-[240px] w-[300] rounded-md p-4 flex flex-col justify-around">
            <p className="text-sm ">
              Free delivery for you and Shipping in 2 days
            </p>
            <h1 className="text-xl font-medium">
              Subtotal :({getTotal().totalQuantity}) : {getTotal().totalPrice}
            </h1>
            <button className="btn rounded-lg text-sm"> Proceed to pay</button>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-4 items-center justify-center h-[30rem]">
          <h1 className="text-xl">Your Cart is Empty</h1>
          <button onClick={() => router.push("/")} className="btn rounded-md">
            Go Shop Now
          </button>
        </div>
      )}
    </div>
  );
};
export default Cart;
