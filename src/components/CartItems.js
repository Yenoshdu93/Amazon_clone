import {
  decreateQuantity,
  increaseQuantity,
  removeItem,
} from "@/app/cartSlice";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CartItems = ({ id, title, image, description, price, quantity }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="">
      <div key={id} className="">
        <div className="grid grid-cols-3 p-5 shadow-md mt-2 items-center bg-white">
          <div className="">
            <img src={image} width={120} height={120} />
          </div>
          <div>
            <p className="text-sm">{title}</p>
            <p className="text-xs py-3">{description}</p>
            <div className="flex items-center gap-2">
              <span className="text-sm "> Price : </span>
              <span>{price}</span>
            </div>
            <div className="border w-[200px] h-6 flex items-center justify-around rounded-md mt-2">
              <button
                onClick={() => dispatch(decreateQuantity(id))}
                className="border-r px-1 cursor-pointer hover:bg-gray-200"
              >
                <BiMinus />
              </button>
              {quantity}
              <button
                onClick={() => dispatch(increaseQuantity(id))}
                className="border-l px-2 cursor-pointer hover:bg-gray-200"
              >
                <BsPlusLg />
              </button>
            </div>
          </div>
          <div onClick={() => dispatch(removeItem(id))} className="mx-auto">
            <button className="btn w-[230px]">remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItems;
