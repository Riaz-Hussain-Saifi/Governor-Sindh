"use client";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-30 w-full bg-[#004B87] backdrop-blur-md">
      <nav className="flex items-center justify-between w-full p-4 lg:px-8 lg:py-5">
        {/* Destop and mobile Navigation Toggler */}
        <div className="justify-between flex items-center w-full">
          {/* Logo and Title */}
          <div className="m-auto flex h-16 w-[95%] items-center  gap-4 justify-between md:h-20 lg:w-[90%] xl:w-[1300px]">
            <Image
              src="/favicon.ico"
              alt="logo"
              width={50}
              height={50}
              className="mt-14 w-[70px] sm:mt-20 sm:w-[80px] md:w-[90px]"
              priority
            />
            <h1 className="text_shadow hidden text-[15px] font-extrabold text-[#b9d8f3] lg:block xl-lg:text-xl xl:text-2xl">
              Tuition Free Education Program on Latest Technologies
            </h1>
            <h1 className="text_shadow text-[1.125rem] font-extrabold text-[#b9d8f3] lg:hidden">
              Tuition Free Program
            </h1>

            {/* Desktop Links */}
            <div className="hidden lg:flex gap-8 justify-end text-white">
              <Link href="/" className="hover:text-gray-200">
                Home
              </Link>
              <Link href="/apply" className="hover:text-gray-200">
                Apply
              </Link>
              <Link href="/jobs" className="hover:text-gray-200">
                Jobs
              </Link>
              <Link href="/result" className="hover:text-gray-200">
                Result
              </Link>
              <div className="flex items-center cursor-pointer hover:text-gray-200"><Link href="/courses">
                Courses </Link><IoIosArrowDown className="ml-1" />
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="text-white text-3xl lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <RiCloseLargeFill /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 z-40 h-screen w-full  bg-[#004B87] lg:hidden">
          <div className="flex flex-col items-start p-6 space-y-4 text-white">
            <button
              className="self-end text-3xl mb-6"
              onClick={() => setIsOpen(false)}
            >
              <RiCloseLargeFill />
            </button>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="border-b border-gray-400 py-2 hover:bg-blue-800 w-full text-left"
            >
              Home
            </Link>
            <Link
              href="/apply"
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-gray-400 hover:bg-blue-800 w-full text-left"
            >
              Apply
            </Link>
            <Link
              href="/jobs"
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-gray-400 hover:bg-blue-800 w-full text-left"
            >
              Jobs
            </Link>
            <Link
              href="/result"
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-gray-400 hover:bg-blue-800 w-full text-left"
            >
              Result
            </Link>
            <div className="flex items-center border-b border-gray-400 justify-between w-full py-2 cursor-pointer hover:bg-blue-800"><Link href="/courses">
              Courses </Link><IoIosArrowDown className="ml-1" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
