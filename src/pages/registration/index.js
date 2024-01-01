import React, { useState, useEffect } from "react";
import Image from "next/image"
import { useForm } from "react-hook-form";
import Airtable from 'airtable';
import { useRouter } from "next/router";
import Navbar from "../../common/components/Navbar";
import Feature from "../../common/components/Feature"
import { useSession, getSession } from "next-auth/react";
import supabase from "../../supabase/supaBase"

const Index = () => {
    const [successModal, setSuccessModal] = useState(false);
    const [RegisteringModal, setRegisteringModal] = useState(false);
    const [timer, setTimer] = useState(3);
    const router = useRouter();
    const { data: session } = useSession();

    // var base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_airtable_api }).base('app6CHsYoG1ehpXei');
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = async (datas) => {
        // try {
        // console.log(data);
        // setRegisteringModal(true);
        // // now we have the experience data and then email of user from session now using the data from email search a user in the table students and the update the courses column which is a json which is an array of objects the first is course_name then entrolled_at which is auto generated at the current time and prior_exp which is experience data the data is set in supabase

        // const { data: userData, error: userError } = await supabase
        //     .from('students')
        //     .select('id, courses')
        //     .eq('email', session.user.email)
        //     .single();

        // if (userError) {
        //     throw userError;
        // }

        // If the user is found, update the "courses" column
        // const courseName = localStorage.getItem('courseName');
        // if (userData) {
        //     const updatedCourses = [
        //         ...userData.courses,
        //         {
        //             course_name: courseName, // Use the subject from Redux
        //             enrolled_at: new Date().toISOString(),
        //             prior_exp: data.experience,
        //         },
        //     ];

        //     // Update the user's record with the new course information
        //     const { error: updateError } = await supabase
        //         .from('students')
        //         .update({ courses: updatedCourses })
        //         .eq('id', userData.id);

        //     if (updateError) {
        //         throw updateError;
        //     }

        // Your existing code for success modal, timer, etc.

        // Redirect to the courses page
        //     setTimeout(() => {
        //         setSuccessModal(false);
        //         router.push('/courses');
        //     }, 3000);
        // }


        const { data, error } = await supabase
            .from('students')
            .upsert(
                datas
            )
            .select()

        if(error){
            console.log(error);
        }

        alert("You have been registered")
        reset();
        router.push("/courses")

    }

return (
    <div className="overflow-x-hidden">
        <Navbar />
        <div className="flex flex-col">
            {/* <div className="  flex items-start justify-between md:mx-10">
                    <div className="w-full md:flex hidden rounded-lg shadow bg-gray-600 bg-opacity-50">
                        <div>

                            <Image className="p-3 rounded-t-lg h-60" width={300} height={100} src="/assets/Courses/images/Reactjs.svg" alt="product image" />
                            
                        </div>

                        <div className='flex flex-col gap-2 text-white items-center justify-center '>

                            <div className='grid grid-cols-3 gap-3'>
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
                </div> */}
            <section class="bg-transparent md:mt-12 pb-12 w-full ">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                    {/* <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        NoTime
                    </a> */}
                    <div class="w-full rounded-lg shadow md:mt-0  xl:p-0 bg-white bg-opacity-10">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
                            <h1 class="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl text-white">
                                Enroll for the course
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)} class="space-y-4 md:gap-4 md:grid md:grid-cols-2 grid-cols-1 justify-center items-center ">
                                <div>
                                    <label for="name" class="block mb-2 text-sm font-medium text-white">Your Name</label>
                                    <input {...register("name")} type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Your name" required />
                                </div>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
                                    <input {...register("email")} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Notime@gmail.com" required />
                                </div>
                                <div>
                                    <label for="college" class="block mb-2 text-sm font-medium text-white">Your college</label>
                                    <input {...register("college")} type="text" name="college" id="college" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="college" required />
                                </div>
                                {/* <div>
                                        <label for="year" class="block mb-2 text-sm font-medium text-white">Year of Study</label>
                                        <input {...register("year")} type="text" name="year" id="year" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="year" required />
                                    </div>
                                    <div>
                                        <label for="branch" class="block mb-2 text-sm font-medium text-white">Branch of Study</label>
                                        <input {...register("branch")} type="text" name="branch" id="branch" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="IT / CS / EC etc" required />
                                    </div> */}
                                <div>
                                    <label for="linkedin" class="block mb-2 text-sm font-medium text-white">linkedin URL</label>
                                    <input {...register("linkedin")} type="text" name="linkedin" id="linkedin" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="linkedin.com/" />
                                </div>
                                <div>
                                    <label for="github" class="block mb-2 text-sm font-medium text-white">Github URL</label>
                                    <input {...register("github")} type="text" name="github" id="github" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="https://github.com/" />
                                </div>
                                <div>
                                    <label for="phone" class="block mb-2 text-sm font-medium text-white">Your WhatsApp number</label>
                                    <input {...register("phone")} type="text" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="+91" required />
                                </div>
                                <div className="col-span-2 flex justify-center items-center">
                                    <button type="submit" class="w-1/3 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-700 ">Enroll Now</button>
                                </div>
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
        {
            RegisteringModal && (
                <div id="successModal" tabindex="-1" aria-hidden="true" class="w-full h-screen bg-black bg-opacity-80 overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center">
                    <div class="flex justify-center items-center relative p-4 w-full max-w-md h-full md:h-auto">
                        <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                            <span className="text-3xl loading loading-lg loading-spinner text-info mb-4"></span>
                            <p class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Registering you for the course.</p>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
)
};

// export async function getServerSideProps(context) {
//     const session = await getSession(context);

//     if (!session) {
//         // Redirect to the login page if the user is not authenticated
//         return {
//             redirect: {
//                 destination: "/",
//                 permanent: false,
//             },
//         };
//     }

//     // If the session is available, pass it as a prop to the component
//     return {
//         props: {
//             session,
//         },
//     };
// }

export default Index;
