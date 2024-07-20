"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed top-0 left-0 bg-white z-50">
      <header className="flex justify-between h-20 items-center py-3 px-10 w-screen">
        <div className="w-20">
          <Image width={50} height={50} alt="" src="/ahead-logo.png" />
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-6 items-center text-sm font-medium text-gray-600">
            <li className="cursor-pointer font-semibold hover:text-gray-800">
              Emotions
            </li>
            <li className="cursor-pointer font-semibold hover:text-gray-800">
              Manifesto
            </li>
            <li className="cursor-pointer font-semibold hover:text-gray-800">
              Self awareness test
            </li>
            <li className="cursor-pointer font-semibold hover:text-gray-800">
              Work with us
            </li>
          </ul>
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <button className="cursor-pointer text-sm font-semibold  rounded-xl  font-semibold">
            {isOpen ? (
              <svg
                className="w-10 h-10 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="w-10 h-10 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6L18 18"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden md:block">
          <button className="cursor-pointer text-sm font-semibold text-white bg-black rounded-full px-5 py-3 font-semibold">
            Download app
          </button>
        </div>
      </header>
      <div className="md:hidden ">
        <ul
          style={{
            top: isOpen ? "-500px" : "78px",
            height: "calc(100vh - 78px)",
          }}
          className="absolute left-0 w-full bg-white shadow-md p-4"
        >
          <li className="cursor-pointer font-semibold p-3 pt-6 border-b border-gray-200">
            Emotions
          </li>
          <li className="cursor-pointer font-semibold p-3 pt-6 border-b border-gray-200">
            Manifesto
          </li>
          <li className="cursor-pointer font-semibold p-3 pt-6 border-b border-gray-200">
            Self awareness test
          </li>
          <li className="cursor-pointer font-semibold p-3 pt-6 border-b border-gray-200">
            Work with us
          </li>
          <div className="flex justify-center mt-8 w-full">
            <button className="cursor-pointer font-semibold p-3 mt-4 bg-black w-full text-white">
              Download app
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
