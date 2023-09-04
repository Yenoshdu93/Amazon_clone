import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/cartSlice";
import Image from "next/image";
import Link from "next/link";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, category, description, image, price }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    let randomrating =
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING)) + MIN_RATING;

    setRating(randomrating);
  }, []);

  const dispatch = useDispatch();

  return (
    <div
      key={id}
      className="relative flex flex-col  justify-between m-2 p-8 bg-white z-30 "
    >
      <p className="absolute top-2 right-2 italic text-gray-500 text-xs">
        {category}
      </p>

      <Link
        className="self-center"
        href={{
          pathname: `product/${id}`,
          query: {
            id,
            title,
            category,
            description,
            image,
            price,
          },
        }}
        as={`product/${id}`}
      >
        <Image
          src={image}
          height={200}
          width={200}
          alt=""
          className=" w-[200px] h-[200px] object-contain self-center"
        />
      </Link>

      <p className=" text-sm my-2 text-gray-800">{title}</p>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <AiFillStar className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2 text-gray-600">
        {description}...
      </p>
      <p className="my-2 text-black">Price : {price}</p>
      <button
        onClick={() => {
          dispatch(
            addToCart({
              id,
              title,
              category,
              description,
              image,
              price,
            })
          );
        }}
        className="mt-auto btn text-gray-950"
      >
        Add to cart
      </button>
    </div>
  );
};
export default Product;
