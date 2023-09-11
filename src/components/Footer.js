import React from "react";
import Image from "next/image";
import Logo from "../../public/Log/amazon.png";

const Footer = () => {
  return (
    <>
      <div className="hidden md:flex">
        <button className="w-full h-12 text-white text-sm bg-amazon_blue-light hover:bg-gray-700">
          back to top
        </button>
      </div>
      <div className="w-full h-full bg-amazon_blue ">
        <div className="w-full px-[15%]  py-[3%] sm:flex sm:flex-col lg:grid lg:grid-cols-3 items-start justify-between border-b border-amazon_blue-light">
          <div className="flex flex-col space-y-4 sm:">
            <h2 className="text-white font-bold ">Get to Know Us</h2>
            <div>
              <p className="text-white text-sm">About Us</p>
              <p className="text-white text-sm">Careers</p>
              <p className="text-white text-sm">Press Releases</p>
              <p className="text-white text-sm">Amazon Science</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white font-bold">Contact with Us</h2>
            <div className="space-y-2">
              <p className="text-white text-sm ">Facebook</p>
              <p className="text-white text-sm ">Twitter</p>
              <p className="text-white text-sm "> Instagram</p>
              <p className="text-white text-sm ">Amazon </p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white font-bold">Make money with Us</h2>
            <div className="space-y-4">
              <p className="text-white text-sm">
                Make Money with Us Sell on Amazon
              </p>
              <p className="text-white text-sm">
                Sell under Amazon Accelerator
              </p>
              <p className="text-white text-sm">Protect and Build Your Brand</p>
              <p className="text-white text-sm">Amazon Global Selling</p>
              <p className="text-white text-sm">
                {" "}
                Become an Affiliate Fulfilment by Amazon
              </p>
              <p className="text-white text-sm">
                {" "}
                Advertise Your Products Amazon Pay on Merchants
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white font-bold">Get to Know Us</h2>
            <div>
              <p className="text-white text-sm">About Us</p>
              <p className="text-white text-sm">Careers</p>
              <p className="text-white text-sm">Press Releases</p>
              <p className="text-white text-sm">Amazon Science</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[15vh] bg-amazon_blue py-5 flex flex-col items-center justify-center">
        <div>
          <Image className="cursor-pointer" src={Logo} width={120} alt="" />
        </div>
        <p className="text-white mt-2 border-b">India</p>
      </div>
    </>
  );
};

export default Footer;
