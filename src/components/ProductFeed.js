import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-[15rem] bg-gray-300">
        {products.map((item) => (
          <Product
            id={item.id}
            title={item.title}
            category={item.category}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        ))}
        <img
          className="md:col-span-full"
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
