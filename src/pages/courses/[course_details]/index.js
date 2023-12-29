import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Navbar from "../../../common/components/Navbar.jsx"
import Stars from "./Stars.jsx"
import Tick from './Tick.jsx'
import Feature from "../../../common/components/Feature";

const index = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <div class="pt-8 pb-16 lg:pt-10 lg:pb-24 bg-transparent">
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
          <article class="mx-auto w-full text-white">

            {/* main heading */}
            <div className='flex lg:gap-0 gap-9 lg:flex-row flex-col justify-between lg:items-start items-center'>
              <div className='lg:w-2/4'>
                <h1 class="mb-4 text-3xl font-extrabold leading-tight  lg:mb-6 lg:text-4xl text-white">React.JS Facilitator Program</h1>
                <p class="text-lg mb-3">Our React.js Facilitator Training Program is a comprehensive offline course designed to equip individuals with the knowledge and skills required to become proficient React.js facilitators. This program focuses on key technologies such as React.js, TailwindCSS, Redux, and API integration, ensuring that participants are well-prepared to lead and teach others in the ever-evolving world of web development.</p>
                {/* <div className='flex'>
                  <Stars />
                </div> */}
                <div className='mt-10'>
                  <div class="p-4 rounded-lg md:p-8 bg-gray-600 bg-opacity-50" id="about" role="tabpanel" aria-labelledby="about-tab">
                    <h2 class="mb-5 text-2xl font-extrabold tracking-tight text-white">What you will learn</h2>
                    <ul role="list" class="space-y-4 text-white">
                      <li class="flex space-x-2 items-center">
                        <Tick />
                        <span class="leading-tight">Learn advance JavaScript concepts like ES6 and arrow functions, Async Await.
                        </span>
                      </li>
                      <li class="flex space-x-2 items-center">
                        <Tick />
                        <span class="leading-tight">Create websites with React JS.
                        </span>
                      </li>
                      <li class="flex space-x-2 items-center">
                        <Tick />
                        <span class="leading-tight">Learn about routing & route-related data fetching with React Router
                        </span>
                      </li>
                      <li class="flex space-x-2 items-center">
                        <Tick />
                        <span class="leading-tight">Learn advance styling using TailwindCSS.
                        </span>
                      </li>
                      <li class="flex space-x-2 items-center">
                        <Tick />
                        <span class="leading-tight">Learn how to use Redux for state management.
                        </span>
                      </li>
                      <li class="flex space-x-2 items-center">
                        <Tick />
                        <span class="leading-tight">Acquire coding insights and access resources for optimal website development.
                        </span>
                      </li>
                      <li class="flex space-x-2 items-center">
                        <Tick />
                        <span class="leading-tight">Receive the complete source code for the final website product.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* course card */}
              <div className="w-full max-w-sm rounded-lg shadow bg-gray-600 bg-opacity-50">
                <Image width={500} height={100} className="p-8 rounded-t-lg" src="/assets/Courses/images/Reactjs.svg" alt="product image" />
                <div className="px-5 pb-5">

                  <div className='flex flex-col gap-2'>
                    {/* <span className="text-3xl font-bold text-white">₹500</span> */}
                    <Link href="/registration" className="text-white bg-blue-700 hover: focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Register for Course</Link>
                    <span className="mt-8 text-xl font-bold  text-white">This Course will include : </span>
                    <div className='flex flex-col gap-3'>
                      <Feature point="48 hours hands-on practice" />
                      <Feature point="Offline training on weekends" />
                      <Feature point="Experienced mentors" />
                      <Feature point="Real-World Projects" />
                      <Feature point="Personalized Learning" />
                      <Feature point="Practical Workshops" />
                      <Feature point="Skill Assessments" />
                      <Feature point="Certificate of completion" />
                    </div>
                  </div>
                </div>
              </div>

              {/* <Image width={300} height={300} className='w-96 h-56 mb-8' src="/assets/django.png" alt="" /> */}
            </div>

            <h1 class="my-8 lg:text-left text-center text-xl font-extrabold leading-tight  lg:mb-6 lg:text-2xl text-white">Meet your mentors</h1>
            <header class="mb-4 lg:mb-6">
              <address class="flex flex-wrap items-center lg:justify-start justify-center gap-6 mb-6 not-italic">
                <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <Image width={100} height={100} class="mr-4 w-16 h-16 rounded-full" src="/assets/me.jpg" alt="Jese Leos" />
                  <div>
                    <a href="#" rel="author" class="text-xl font-bold text-white">Muhammed Rinshad S R</a>
                    <p class="text-base text-gray-500 dark:text-gray-400">Founder & Full Stack Developer</p>
                    <p class="text-base text-gray-500 dark:text-gray-400">
                      <span>@NoTime</span>
                    </p>
                  </div>
                </div>
                <div class="inline-flex items-center mr-3 text-sm text-white">
                  <Image width={100} height={100} class="mr-4 w-16 h-16 rounded-full" src="/assets/thrisha.jpg" alt="Jese Leos" />
                  <div>
                    <a href="#" rel="author" class="text-xl font-bold text-white">Thrisha K</a>
                    <p class="text-base text-gray-500 dark:text-gray-400">Founder and CTO</p>
                    <p class="text-base text-gray-500 dark:text-gray-400">
                      <time pubdate datetime="2022-02-08" title="February 8th, 2022">@NoTime</time>
                    </p>
                  </div>
                </div>
              </address>
            </header>
          </article>
        </div>
      </div>
    </div>
  )
}

export default index
