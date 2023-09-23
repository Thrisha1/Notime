import Image from "next/image";
import React from "react";
import Logo from "../../../public/logo.png";

const Navbar = () => {
  const opener = () => {
    const navbar = document.getElementById("navbar-search");
    navbar.classList.toggle("hidden");
  };

  return (
    <nav class="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 w-screen">
      <div id="main-tab" class="flex w-full flex-wrap md:flex-nowrap justify-between md:px-7">
        <div className="flex justify-center items-center">
          <a href="#" class="flex items-center">
            <Image
              src={Logo}
              class="w-15 sm:h-9 lg:mr-2 "
              alt="Flowbite Logo"
            />
          </a>
        </div>
        <div class="flex">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            class=" md:hidden text-gray-500 hover:underline  focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Search</span>
          </button>

          <button
            data-collapse-toggle="navbar-search"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:underline focus:outline-none focus:ring-2 focus:ring-gray-200  dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
            onClick={opener}
          >
            <span class="sr-only">Open menu</span>
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
        </div>
        <div
          class="hidden w-full md:flex md:items-center md:justify-end md:w-auto md:order-1"
          id="navbar-search"
        >
          <ul
            id="navbar-open"
            class="text-white flex bg-transparent justify-center items-center flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  "
          >
            <li>
              <a
                href="#"
                class="block py-2  rounded hover:underline md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2   rounded hover:underline md:hover:bg-transparent "
              >
                Why Notime?
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2   rounded hover:underline md:hover:bg-transparent "
              >
                Contact Us
              </a>
            </li>
            {/* <li>
              <a
                href="#"
                class="block md:py-2 bg-white px-3 py-1 text-black   rounded hover:underline md:hover:bg-transparent "
              >
                Go to console
              </a>
            </li> */}
            {/* <li>
              <a
                href="#"
                class=" py-2 hidden md:block   rounded hover:underline md:hover:bg-transparent "
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hidden md:block py-2   rounded hover:underline md:hover:bg-transparent "
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
