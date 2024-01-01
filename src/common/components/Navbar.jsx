import Image from "next/image";
import React from "react";
import Logo from "../../../public/logo.png";
import Link from "next/link";
import { useRouter } from "next/router"; // Import the useRouter hook
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {
  const router = useRouter(); // Initialize the useRouter hook
  const { data: session, status } = useSession();
  console.log(session);
  const counter = useSelector((state) => state.register.value);

  const opener = () => {
    const navbar = document.getElementById("navbar-search");
    navbar.classList.toggle("hidden");
  };

  // Function to determine if a link is active
  const isLinkActive = (href) => {
    return router.pathname === href;
  };

  return (
    <nav className="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 w-screen">
      <div
        id="main-tab"
        className="flex w-full flex-wrap md:flex-nowrap justify-between md:px-7"
      >
        <div className="flex justify-center items-center">
          <a href="#" className="flex items-center">
            <Image
              src={Logo}
              className="w-15 sm:h-9 lg:mr-2 "
              alt="Flowbite Logo"
            />
          </a>
        </div>
        <div className="flex">
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:underline focus:outline-none focus:ring-2 focus:ring-gray-200  dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
            onClick={opener}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full md:flex md:items-center md:justify-end md:w-auto md:order-1"
          id="navbar-search"
        >
          <ul
            id="navbar-open"
            className="text-white flex bg-transparent justify-center items-center flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0"
          >
            <li>
              <Link
                href="/"
                className={`block py-2 rounded md:hover:bg-transparent ${
                  isLinkActive("/")
                    ? "bg-white text-black px-2 hover:text-white"
                    : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block p-2 rounded md:hover:bg-transparent ${
                  isLinkActive("/about")
                    ? "bg-white text-black px-2 hover:text-white"
                    : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className={`block py-2 rounded md:hover:bg-transparent ${
                  isLinkActive("/courses")
                    ? "bg-white text-black px-2 hover:text-white"
                    : ""
                }`}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block md:py-2 px-3 py-1 rounded  md:hover:bg-transparent hover:text-white ${
                  isLinkActive("/contact")
                    ? "bg-white text-black px-2 hover:text-white"
                    : ""
                }`}
              >
                Contact
              </Link>
            </li>
            {/* {session ? (
              <li className="flex gap-5 items-center">
                <h1>
                    Welcome back {session.user.name}
                </h1>
                <Link
                  href="/dashboard"
                  className={`block text-lg md:py-2 px-6 py-1 bg-white text-black rounded  md:hover:bg-transparent hover:text-white `}
                >
                  Go to Dashboard
                </Link>
              </li>
            ) : (
              <li>
                <button
                  onClick={() => {
                    if (router.pathname !== "/") {
                      signIn("google", {
                        callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}${router.pathname}`,
                      });
                    } else {
                      signIn("google", {
                        callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
                      });
                    }
                  }}
                  href="/contact"
                  className={`block text-lg md:py-2 px-6 py-1 bg-white text-black rounded  md:hover:bg-transparent hover:text-white `}
                >
                  Signin
                </button>
              </li>
            )} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

export async function getServerSideProps(context) {
    const session = await getSession(context);
  
    if (session) {
        context.res.writeHead(302, { Location: '/' });
        context.res.end();
        return { props: {} };
    }
  
    return {
      props: {
        session,
      },
    };
  }