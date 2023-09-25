import React, { useState , useEffect } from "react";
import Image from "next/image"
import { useForm } from "react-hook-form";
import Airtable from 'airtable';
import { useRouter } from "next/router";
import Navbar from "../../common/components/Navbar";
import Feature from "../../common/components/Feature"


const Index = () => {
    const [successModal, setSuccessModal] = useState(false);
    const [timer, setTimer] = useState(3);

    const router = useRouter();
    var base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_airtable_api }).base('app6CHsYoG1ehpXei');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        base('Registered').create({
            "Name": data.name,
            "Email": data.email,
            "College": data.college,
            "Phone": data.phone,
            "Year": data.year,
            "Branch": data.branch,
            "LinkedIn": data.linkedin,
            "Github": data.github
        }, function (err, record) {
            if (err) {
                console.error(err);
                return;
            }

            // set the modal to true
            setSuccessModal(true);
            setInterval(() => {
                setTimer(timer - 1);
            }, 1000);
            setTimeout(() => {
                setSuccessModal(false);
                router.push('/courses');
            }, 3000);
            console.log(record.getId());
        });
    }
    return (
        <div className="overflow-x-hidden">
            <Navbar/>
            <div className="flex">
            <div className="md:w-1/2  flex items-start justify-between md:ml-10 md:mt-32">
                <div className="w-full md:flex hidden rounded-lg shadow bg-gray-600 bg-opacity-50">
                    <div>

                    <Image className="p-8 rounded-t-lg h-60" width={300} height={100} src="/assets/htmlcssjs1.png" alt="product image"/>
                        <div className="flex flex-col w-full items-center justify-center pb-4">
                        <span className="text-3xl pb-4 font-bold text-gray-900 dark:text-white">$599</span>
                        <span
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register for Course</span>
                        </div>
                    </div>

                        <div className='flex flex-col gap-2 text-white items-center justify-center '>

                            <div className='flex flex-col gap-3'>
                                <Feature point="15 hours hands-on practice" />
                                <Feature point="Experienced mentors" />
                                <Feature point="Real-World Projects"/>
                                <Feature point="Personalized Learning"/>
                                <Feature point="Practical Workshops"/>
                                <Feature point="Skill Assessments"/>
                                <Feature point="Certificate of completion"/>
                            </div>
                        </div>
                </div>
            </div>
            <section class="bg-transparent py-12 w-full md:w-1/2">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                    {/* <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        NoTime
                    </a> */}
                    <div class="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-white bg-opacity-10">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Enroll for the course
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)} class="space-y-4 md:space-y-6">
                                <div>
                                    <label for="name" class="block mb-2 text-sm font-medium text-white">Your Name</label>
                                    <input {...register("name")} type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" required />
                                </div>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
                                    <input {...register("email")} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Notime@gmail.com" required />
                                </div>
                                <div>
                                    <label for="college" class="block mb-2 text-sm font-medium text-white">Your college</label>
                                    <input {...register("college")} type="text" name="college" id="college" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="college" required />
                                </div>
                                <div>
                                    <label for="phone" class="block mb-2 text-sm font-medium text-white">Your phone</label>
                                    <input {...register("phone")} type="text" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+91" required />
                                </div>
                                <div>
                                    <label for="year" class="block mb-2 text-sm font-medium text-white">Year of Study</label>
                                    <input {...register("year")} type="text" name="year" id="year" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="year" required />
                                </div>
                                <div>
                                    <label for="branch" class="block mb-2 text-sm font-medium text-white">Branch of Study</label>
                                    <input {...register("branch")} type="text" name="branch" id="branch" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="IT / CS / EC etc" required />
                                </div>
                                <div>
                                    <label for="linkedin" class="block mb-2 text-sm font-medium text-white">linkedin URL</label>
                                    <input {...register("linkedin")} type="text" name="linkedin" id="linkedin" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="linkedin.com/"  />
                                </div>
                                <div>
                                    <label for="github" class="block mb-2 text-sm font-medium text-white">Github URL</label>
                                    <input {...register("github")} type="text" name="github" id="github" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://github.com/"  />
                                </div>
                                <button type="submit" class="w-full bg-blue-700 text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center">Enroll Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            </div>

            {/* success model */}
            {
                successModal && (
                    <div id="successModal" tabindex="-1" aria-hidden="true" class="w-full h-screen bg-black bg-opacity-80 overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center">
                        <div class="flex justify-center items-center relative p-4 w-full max-w-md h-full md:h-auto">
                            <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                                <div class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                                    <svg aria-hidden="true" class="w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span class="sr-only">Success</span>
                                </div>
                                <p class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Successfully registered for the course.</p> 
                                {/* show a redirecting content and show it as a timer */}
                                <p class="mb-4 text-sm font-semibold text-gray-900 dark:text-white">Redirecting in {timer} seconds...</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Index;
