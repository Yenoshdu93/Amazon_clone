import Image from "next/image";
import Logo from "../../public/Log/amazon.png";
import India from "../../public/Log/india.png";
import { GoLocation } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

const Header = () => {
  const cart = useSelector((state) => state.cart.cart);

  const router = useRouter();
  const { data: session } = useSession();

  return (
    <>
      <div className="sticky top-0 w-full h-[3.5rem] bg-amazon_blue z-50">
        <div className="w-full h-full flex items-center justify-between gap-1 mdl:gap:3 px-2 sm:px-10 md:px-2">
          {/* Logo */}

          <div className="flex items-center">
            <div>
              <AiOutlineMenu className="lg:hidden mx-4 text-white text-[2rem]" />
            </div>
            <Image
              onClick={() => router.push("/")}
              className="cursor-pointer w-[110px]  mt-1 p-2 link"
              src={Logo}
              alt="img"
            />
          </div>
          {/* Button */}
          <div className="hidden lg:flex items-center link">
            <GoLocation className="text-white " />
            <p className="st leading-[50%]">
              Deliver to,
              <span className="sst block">India</span>
            </p>
          </div>
          {/* Searchbar */}
          <div className="relative hidden lg:flex items-center flex-1 h-10 px-2 rounded-l-md">
            <input
              className="w-full h-full rounded-l-md outline-none pb-1 px-4 text-sm "
              placeholder="Search Amazon.com"
              type="text"
            />
            <span className="w-12 h-full bg-yellow-400 flex items-center justify-center rounded-r-md hover:bg-yellow-500 cursor-pointer">
              <BsSearch className="text-lg" />
            </span>
          </div>
          <div className="hidden lg:flex items-center justify-center space-x-2 link">
            <Image src={India} width={20} alt="" />
            <p className="sst">IND</p>
          </div>

          <div className="hidden lg:flex items-center link">
            <p className="st leading-[50%]">
              Hello,sign in
              <span className="sst block">Account & Lists</span>
            </p>
          </div>

          <div className="hidden flex items-center link">
            <p className="st leading-[50%]">
              Returns
              <span className="sst block">& Orders</span>
            </p>
          </div>
          <div
            onClick={() => router.push("/cart")}
            className="flex items-center link"
          >
            <div className="relative">
              <PiShoppingCartSimpleThin className="text-white text-[1.7rem]" />
              <span className="absolute bottom-5 right-0 sst bg-yellow-600 px-1 rounded-md">
                {cart.length >= 1 ? cart.length : 0}
              </span>
            </div>
            <p className="hidden lg:block sst ">Cart</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center   w-full h-8 bg-amazon_blue-light px-4 ">
        <p className="inline-flex items-center font-bold text-white gap-1 h-full px-2 border border-transparent hover:border-white cursor-pointer">
          <AiOutlineMenu /> All
        </p>
        <p className="inline-flex items-center text-sm  text-white gap-1 h-full px-2 border border-transparent hover:border-white cursor-pointer">
          Deals Today
        </p>
        <p className="inline-flex items-center text-sm  text-white gap-1 h-full px-2 border border-transparent hover:border-white cursor-pointer">
          Customer Service
        </p>
        <p className="inline-flex items-center text-sm  text-white gap-1 h-full px-2 border border-transparent hover:border-white cursor-pointer">
          Registry
        </p>
        <p className="inline-flex items-center text-sm  text-white gap-1 h-full px-2 border border-transparent hover:border-white cursor-pointer">
          Gift Cards
        </p>
        <p className="inline-flex items-center text-sm  text-white gap-1 h-full px-2 border border-transparent hover:border-white cursor-pointer">
          Sell
        </p>
      </div>
    </>
  );
};

export default Header;
