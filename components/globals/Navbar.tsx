"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const linkes = [
  {
    page: "Timeline",
    path: "",
  },
  {
    page: "Overview",
    path: "",
  },
  {
    page: "FAQs",
    path: "",
  },
  {
    page: "Contact",
    path: "",
  },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className={`py-[2.2rem] border-gray-50 border
        border-x-0 border-t-0 border-opacity-10 relative`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="container-custom flex items-center justify-between">
        <span className="font-bold text-[1.6rem] playfair w-full z-10">
          get<span className="text-pink">linked</span>
        </span>

        {/* Desktop Navbar */}
        <div className="hidden justify-around w-full gap-3 md:flex">
          <ul className="flex gap-12 text-sm items-center">
            {linkes.map((link) => {
              return (
                <li key={link.page}>
                  <Link href={link.path}>{link.page}</Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/"
            className="bg-purple-gradient py-2 px-8 text-sm rounded-[2.45px]"
          >
            Register
          </Link>
        </div>

        {/* Mobile Navbar */}
        <button onClick={handleMenu} className="z-10 block md:hidden">
          <Image
            src={
              isOpen
                ? "/images/globals/close.svg"
                : "/images/globals/bugermenu.svg"
            }
            height={100}
            width={22}
            style={{ width: "25px", height: "100%" }}
            alt=""
            className="z-10 "
          />
        </button>
        {isOpen && (
          <div
            className={`absolute flex flex-col w-full gap-0 md:hidden py-[2rem] top-[0%] left-[-3px]
          h-[60vh] bg-purple-dark transition-transform duration-300`}
          >
            <ul className="flex flex-col gap-5 text-sm items-center justify-start ml-5 mt-[6rem]">
              {linkes.map((link) => {
                return (
                  <li key={link.page} className="w-full">
                    <Link href={link.path}>{link.page}</Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/register"
              className="bg-purple-gradient py-2 px-8 text-sm rounded-[2.45px] mt-6 ml-5 w-fit"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
