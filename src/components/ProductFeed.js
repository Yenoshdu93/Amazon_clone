import Product from "./Product";
import Image from "next/image";

const ProductFeed = ({ products }) => {
  return (
    <div>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:-mt-[15rem] bg-gray-300">
        {products.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            category={item.category}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        ))}
        <Image
          className="md:col-span-full h-full w-full"
          height={400}
          width={1200}
          src="http://links.papareact.com/dyz"
          alt=""
        />
      </div>
      <div className="bg-white p-8 flex flex-col items-center justify-center space-y-2">
        <button className="w-48 font-bold btn text-black">Sign in</button>
        <p className="text-xs text-black">
          New customer{" "}
          <span className="text-blue-500 cursor-pointer">sign up</span>
        </p>
      </div>
    </div>
  );
};
export default ProductFeed;
