import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav class=" border-gray-200 px-2 sm:px-4 py-2.5 bg-p_back">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" class="flex items-center">
          {/* <Image
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
            fit
          /> */}
          <span class="self-center font-black text-3xl text-p_grey whitespace-nowrap hover:text-white ease-in-out duration-200">
            PennyFlo
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col items-center justify-between p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
            <li>
              <Link
                href="#"
                class="block py-2 pl-3 pr-4 text-p_dullgrey  rounded hover:text-white md:border-0 md:p-0 text-lg"
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                class="block py-2 pl-3 pr-4 text-p_dullgrey  rounded hover:text-white md:border-0 md:p-0 text-lg"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#"
                class="block py-2 pl-3 pr-4 text-p_dullgrey  rounded hover:text-white md:border-0 md:p-0 text-lg"
              >
                Pricing
              </Link>
            </li>
            

            <li>
              <Link
                href="#"
                class="block py-2 pl-3 pr-4 text-p_dullgrey  rounded hover:text-white md:border-0 md:p-0 text-lg"
              >
                Contact
              </Link>
            </li>
            {router.pathname === "/signin" && (
              <li>
                <Link
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white md:border-0 md:p-0 text-lg"
                >
                  Sign in
                </Link>
              </li>
            )}
            <li>
              <Button />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
