"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Navbar from "../../../common/components/Navbar.jsx"
import Stars from "./Stars.jsx"
import Tick from './Tick.jsx'
import Feature from "../../../common/components/Feature";
// sanity from client.js
import { client } from "../../../../sanity/lib/client";
import Profile_placeholder from "../../../../public/assets/placeholder_profile.webp"
import CourseDos from '../../../common/components/CourseDos.jsx';


const Index = ({ course }) => {

    const TodoOutcome = {
        "heading": "Project 1 : Creative Todo",
        "type": "list",
        "points":
            [
                "Task managing",
                "Bookmarking",
                "Archiving",
                "Mark as Done",
                "Drag and Drop",
                "Dark Mode",
                "Responsive",
            ]
    }

    const movieFeatures = {
        "heading": "Movie App",
        "type": "list",
        "points":
            [
                'Movie list',
                'Movie Search',
                'Movie Details',
                'Movie Rating',
                'Movie Bookmarking',
                'Movie Trailer',
                'Dark Mode',
                'Responsive'
            ]
    };

    const semiHack = {
        "heading": "Semi-Hackathon",
        "type": "para",
        "points": "Participate in a semi-hackathon where you have the freedom to build your own ideas! Within 12 hours,unleash your creativity and apply the skills learned throughout the course to develop a unique and exciting project."
    };

    const freelance = {
        "heading": "Get into Freelance",
        "type": "para",
        "points": "Launch your freelance web development career by building a personalized portfolio website, simulating client interactions, and exploring payment integration. Gain valuable insights into SEO optimization and freelance success to position yourself for a thriving career in the dynamic world of web development."
    };

    const [remainingTime, setRemainingTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const registrationEndTime = new Date("2024-02-01T23:59:59"); // Replace with your actual registration end time
        const interval = setInterval(() => {
            const currentTime = new Date();
            const timeDifference = registrationEndTime - currentTime;

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            setRemainingTime({ days, hours, minutes, seconds });

            if (timeDifference < 0) {
                clearInterval(interval);
                setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    console.log("index", course)

    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            {course && (
                <div key={course?.slug} class="pt-8 pb-16 lg:pt-10 lg:pb-24 bg-transparent">
                    <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
                        <article class="mx-auto w-full text-white">

                            {/* main heading */}
                            <div
                                className='flex lg:gap-0 gap-9 lg:flex-row flex-col-reverse justify-between lg:items-start items-center'>
                                <div className='lg:w-2/4'>
                                    <h1 class="mb-4 text-3xl font-extrabold leading-tight  lg:mb-6 lg:text-4xl text-white">{course?.title}</h1>
                                    <p class="text-lg mb-3">{course?.description}</p>
                                    <div className='mt-10'>
                                        <div class="p-4 rounded-lg md:p-8 bg-gray-600 bg-opacity-50" id="about"
                                            role="tabpanel" aria-labelledby="about-tab">
                                            <h2 class="mb-5 text-2xl font-extrabold tracking-tight text-white">What you
                                                will learn</h2>
                                            <ul role="list" class="space-y-4 text-white">
                                                {course?.learningObjectives?.map((e, index) => (
                                                    <li key={index} class="flex space-x-2 items-center">
                                                        <Tick />
                                                        <span class="leading-tight">{e}</span>
                                                    </li>
                                                ))}

                                            </ul>
                                        </div>

                                    </div>
                                    <h2 class="mb-5 mt-10 text-2xl font-extrabold tracking-tight text-white">What will you do</h2>



                                    {/* <div className="my-10 w-full  grid md:grid-cols-2 grid-cols-1 gap-10 hover:text-black ">
                                        <a href="#"
                                            className="block max-w-sm p-6 bg-gray-600 bg-opacity-50 border border-gray-200 rounded-lg shadow  ">

                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white underline underline-offset-8 ">Creative Todo</h5>
                                            <ul class=" list-inside font-normal text-white ">
                                                {TodoOutcome.points?.map((e, index) => (
                                                    <li key={index} class="flex space-x-2 items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                                                        </svg>
                                                        <span class="leading-tight">{e}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </a>
                                        <a href="#"
                                            className="block max-w-sm p-6 bg-gray-600 bg-opacity-50 border border-gray-200 rounded-lg shadow">

                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white underline underline-offset-8">Movie App</h5>
                                            <ul type="disk" class="list-inside font-normal text-white">
                                                {movieFeatures.points?.map((e, index) => (
                                                    <li key={index} class="flex space-x-2 items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                                                        </svg>
                                                        <span class="leading-tight">{e}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </a>
                                        <a href="#"
                                            className="block max-w-sm p-6 bg-gray-600 bg-opacity-50 border border-gray-200 rounded-lg shadow ">

                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white underline underline-offset-8">Semi-Hackathon</h5>
                                            <p type="disk" class="font-normal text-white">
                                                Participate in a semi-hackathon where you have the freedom to build your own ideas! Within 12 hours,
                                                unleash your creativity and apply the skills learned throughout the course to develop a unique and exciting project.
                                            </p>
                                        </a>
                                        <a href="#"
                                            className="block max-w-sm p-6 bg-gray-600 bg-opacity-50 border border-gray-200 rounded-lg shadow ">

                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white underline underline-offset-8">Get into Freelance</h5>
                                            <p type="disk" class="font-normal text-white">
                                                Launch your freelance web development career by building a personalized portfolio website, simulating client interactions,
                                                and exploring payment integration. Gain valuable insights into SEO optimization and freelance success
                                                to position yourself for a thriving career in the dynamic world of web development.
                                            </p>
                                        </a>

                                    </div> */}

                                    <div className="flex flex-col gap-4">
                                        <CourseDos datas={TodoOutcome} />
                                        <CourseDos datas={movieFeatures} />
                                        <CourseDos datas={semiHack} />
                                        <CourseDos datas={freelance} />
                                    </div>
                                </div>
                                {/* course card */}
                                <div className="w-full max-w-sm rounded-lg shadow bg-gray-600 bg-opacity-50">
                                    <Image width={500} height={100} className="p-8 rounded-t-lg"
                                        src={course.courseImage.asset.url} alt="product image" />
                                    <div className="px-5 pb-5">

                                        <div className='flex flex-col gap-2'>
                                            <div className="text-white bg-black bg-opacity-20 hover: focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm sm:px-5 px-1 py-2.5 text-center flex xs:flex-row flex-col justify-around xs:gap-12 gap-3 items-center">
                                                <h1>
                                                    Now At
                                                    <span className='text-red-600 font-black text-xl bg-white p-1 mx-2 rounded-md'>
                                                        <span className='font-normal text-xl ml-1 '>₹</span>
                                                        3,999
                                                    </span>
                                                    <span className='line-through text-gray-300 text-sm ml-1'>
                                                        ₹ 5,999
                                                    </span>
                                                </h1>
                                                <span className='text-blue-500 font-bold '>33% off</span>
                                            </div>
                                            <Link href="/registration"
                                                className="text-white bg-blue-700 hover: focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Enroll Now</Link>
                                            <span className='text-center text-sm'>
                                                Register Now and pay before February 2nd 2024
                                            </span>
                                            <span className="text-md text-center text-gray-300">Registration ends in <br></br><br></br>
                                                <div className='flex flex-wrap justify-center gap-4 font-bold' >
                                                    <span className="flex-1 flex-col text-md text-center text-blue-600 bg-white p-2 rounded-lg "><span className='text-2xl'>{remainingTime.days}</span> <br></br> days</span>
                                                    <span className="flex-1 text-md text-center text-blue-600 bg-white p-2 rounded-lg "><span className='text-2xl'>{remainingTime.hours}</span> <br></br> hours</span>
                                                    <span className="flex-1 text-md text-center text-blue-600 bg-white p-2 rounded-lg "><span className='text-2xl'>{remainingTime.minutes}</span> <br></br> minutes</span>
                                                    <span className="flex-1 text-md text-center text-blue-600 bg-white p-2 rounded-lg "><span className='text-2xl'>{remainingTime.seconds}</span> <br></br> seconds</span>
                                                </div>
                                            </span>
                                            <span className="mt-8 text-xl font-bold  text-white">This Course will include : </span>
                                            <div className='flex flex-col gap-3'>
                                                {course?.topics?.map((e, index) => (
                                                    <Feature key={index} point={e} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <Image width={300} height={300} className='w-96 h-56 mb-8' src="/assets/django.png" alt="" /> */}
                            </div>


                            <h1 class="my-8 lg:text-left text-center text-xl font-extrabold leading-tight  lg:mb-6 lg:text-2xl text-white">Meet
                                your mentors</h1>
                            <header class="mb-4 lg:mb-6">
                                <address
                                    class="flex flex-wrap items-center lg:justify-start justify-center gap-6 mb-6 not-italic">
                                    {
                                        course?.mentors?.map((mentor, index) => (

                                            <div key={index} class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                                {
                                                    mentor?.imageUrl ? (
                                                        <Image width={100} height={100} class="mr-4 w-16 h-16 rounded-full"
                                                            src={mentor?.imageUrl} alt="Jese Leos" />
                                                    ) : (
                                                        <Image width={100} height={100} class="mr-4 w-16 h-16 rounded-full"
                                                            src={Profile_placeholder} alt="Jese Leos" />
                                                    )
                                                }
                                                <div>
                                                    <a href="#" rel="author" class="text-xl font-bold text-white">{mentor.name}</a>
                                                    <p class="text-base text-gray-500 dark:text-gray-400">{mentor.designation}</p>
                                                    {/* <p class="text-base text-gray-500 dark:text-gray-400">
                                                        <span>@NoTime</span>
                                                    </p> */}
                                                </div>
                                            </div>
                                        ))
                                    }
                                    {/* <div class="inline-flex items-center mr-3 text-sm text-white">
                                        <Image width={100} height={100} class="mr-4 w-16 h-16 rounded-full"
                                            src="/assets/thrisha.jpg" alt="Jese Leos" />
                                        <div>
                                            <a href="#" rel="author" class="text-xl font-bold text-white">Thrisha K</a>
                                            <p class="text-base text-gray-500 dark:text-gray-400">Founder and CTO</p>
                                            <p class="text-base text-gray-500 dark:text-gray-400">
                                                <time pubdate datetime="2022-02-08" title="February 8th, 2022">@NoTime
                                                </time>
                                            </p>
                                        </div>
                                    </div> */}
                                </address>
                            </header>
                        </article>
                    </div>
                </div>
            )}
        </div>
    )
}

export async function getStaticPaths() {
    let data = [];
    const query = `*[_type == "course"]`;

    await client.fetch(query).then((res) => {
        data = res;
    });

    const paths = data?.map((course) => ({
        params: { course_details: course.slug.current } // Extract slug directly
    }));

    return {
        paths,
        fallback: true
    };
}

export async function getStaticProps({ params }) {
    const { course_details } = params;
    const query = `*[_type == "course" && slug.current == $slug][0] {
        title,
        slug,
        description,
        courseImage {
          asset -> {
            _id,
            url
          }
        },
        learningObjectives,
        topics,
        prerequisites,
        mentors[] {
            name,
            designation,
            "imageUrl": photo.asset->url
          }
      }`;
    const paramsObject = { slug: course_details };

    const course = await client.fetch(query, paramsObject);

    // console.log("course: ", course);

    return {
        props: {
            course,
        },
    };
}

export default Index
