import Header from "@/components/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/cartSlice";

export const ProductDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(router.query);
  const [item, setItem] = useState({});
  useEffect(() => {
    setItem(router.query);
  }, []);
  const handleEvents = () => {
    const items = {
      id: item.id,
      title: item.title,
      category: item.category,
      description: item.description,
      image: item.image,
      price: item.price,
    };
    dispatch(addToCart(items));
    router.push("/cart");
  };
  return (
    <div>
      <Header />
      <div className="grid grid-cols-6 px-4 py-10 h-full w-full max-w-screen-xl mx-auto gap-2">
        <div className="self-center h-200 w-200 col-span-2 mx-20 mt-20">
          <Image
            className="self-center"
            src={item.image}
            height={200}
            width={200}
            alt="img"
          />
          <p className="mx-10 mt-4 text-sm text-gray-600 italic">
            {item.category}
          </p>
        </div>
        <div className="col-span-3 ">
          <div className="space-y-2 bordr border-b border-gray-300 pb-4">
            <p className="text-2xl font">{item.title}</p>
            <span className=" block text-xs text-blue-700 cursor-pointer hover:text-red-400 hover:underline">
              Visite the Store
            </span>
            <p className="text-xs">{item.description}</p>
          </div>
          <div className="py-2 border-b border-gray-300">
            <div className="text-xl ">
              <span className="text-red-400 ">-5% </span>
              Rs. {item.price}
              <span className="text-xs text-gray-500 block px-2">
                M.R.P rs1,040
              </span>
              <span className="text-sm text-black">inclusive of all taxes</span>
            </div>
          </div>
          <div className="py-2 border-b border-gray-300 flex items-center gap-2">
            <div className="w-[150px] h-[150px] rounded-md border flex flex-col  gap-5 p-2">
              <p className="font-medium">Bank Offer</p>
              <p className="text-sm">
                Upto Rs.1,750.00 discount on select Credit Cards, Hdfc...
              </p>
            </div>
            <div className="w-[150px] h-[150px] rounded-md border flex flex-col  gap-5 p-2">
              <p className="font-medium">Bank Offer</p>
              <p className="text-sm">
                Upto Rs.1,750.00 discount on select Credit Cards, Hdfc...
              </p>
            </div>
            <div className="w-[150px] h-[150px] rounded-md border flex flex-col  gap-5 p-2">
              <p className="font-medium">Bank Offer</p>
              <p className="text-sm">
                Upto Rs.1,750.00 discount on select Credit Cards, Hdfc...
              </p>
            </div>
          </div>
        </div>
        <div className="border p-2 rounded-md">
          <div className="flex flex-col space-y-4">
            <p className="">
              Price : <span className="text-xl font-medium ">{item.price}</span>
              <span className="text-xs text-gray-500"> M.R.P 1,400</span>
            </p>
            <p className="text-sm">
              FREE delivery Wednesday, 6 September. Details
            </p>
            <p className="text-sm">
              Or fastest delivery Today. Order within 27 mins. Details
            </p>
            <p className="text-sm">
              Delivering to Mumbai 400001. Sign in to update.
            </p>
            <p className="text-sm">
              FREE delivery Wednesday, 6 September. Details
            </p>
            <p className="text-xl text-green-800">In stock</p>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: item.id,
                    title: item.title,
                    category: item.category,
                    description: item.description,
                    image: item.image,
                    price: item.price,
                  })
                )
              }
              className="btn rounded-full"
            >
              s Add to Cart
            </button>
            <button onClick={handleEvents} className="btn rounded-full">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
