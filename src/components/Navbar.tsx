import React from "react";
import { ImCart } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-transparent">
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
        <h1 className="text-2xl uppercase font-bold">Future Inniative spourt</h1>
        <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-sm font-semibold">
          <Link className="navbarLi" href={""}>
            Home
          </Link>
          <Link
            href={""}
            className="navbarLi  hover:bg-pink-600 hover:text-white duration-300 "
          >
            Services
          </Link>
          <Link
            href={""}
            className="navbarLi  hover:bg-pink-600 hover:text-white duration-300 "
          >
            Projects
          </Link>
          <Link
            href={""}
            className="navbarLi  hover:bg-pink-600 hover:text-white duration-300 "
          >
            Products
          </Link>
          <Link
            href={""}
            className="navbarLi py-3 hover:bg-pink-600 hover:text-white duration-300 "
          >
            Contact Us
          </Link>
        </ul>
        <div className="hidden lg:inline-flex gap-8 items-center">
          <div className="relative cursor-pointer">
            <ImCart className="text-xl" />
            <span className="w-4 h-4 bg-yellow-600 text-white rounded-full absolute left-0 -bottom-2 text-xs flex items-center justify-center">
              0
            </span>
          </div>
          <button className="w-48 h-14 bg-white text-black uppercase text-sm font-semibold rounded-md hover:bg-red-500 hover:text-white duration-300">
            donate
          </button>
        </div>
        <div className="inline-flex lg:hidden">
          <FiMenu className="text-3xl" />
        </div>
      </div>
    </div>
  );
};
export default Header;
