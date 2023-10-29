import React from "react";
import Link from "next/link";
type Props = {};

export const Navbar = (props: Props) => {
  return (
    <div className="h-32 w-full bg-blue-200  flex items-center top-0 fixed z-10">
      <div className="w-[80%] mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-white text-3xl font-[700] cursor-pointer">
            <span className="text-red-600">Wesdom </span> Ventures
          </h1>
        </Link>
        <ul className="flex flex-row gap-6">
          <Link href="/">
            <li className="font-[500] text-xl">Home</li>
          </Link>
          <Link href="about">
            <li className="font-[500] text-xl">About us</li>
          </Link>
          <Link href="listings">
            <li className="font-[500] text-xl">Our Listings</li>
          </Link>

          <Link href="contact">
            <li className="font-[500] text-xl">Contact us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
