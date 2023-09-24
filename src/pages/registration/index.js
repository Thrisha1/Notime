import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "../../common/components/Navbar";
import Registration from "../../common/UI/registration";

const Index = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // send a post request to https://hooks.airtable.com/workflows/v1/genericWebhook/app6CHsYoG1ehpXei/wflCfP3aRTF6413Ui/wtrq4lBcwciRAlFl6
        // with data as body
        console.log(data);
        fetch('https://hooks.airtable.com/workflows/v1/genericWebhook/app6CHsYoG1ehpXei/wflCfP3aRTF6413Ui/wtrq4lBcwciRAlFl6', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(res => {
            console.log(res);
            if (res.status === 200) {
                alert("You have been successfully enrolled for the course");
            } else {
                alert("Something went wrong. Please try again later");
            }
        }
        ).catch(err => {
            console.log(err);
            alert("Something went wrong. Please try again later");
        }
        );
    }
    return (
        <div>
            {/*<Courses />*/}
            {/* <iframe
                className="airtable-embed"
                src="https://airtable.com/embed/app6CHsYoG1ehpXei/shr6X0LRdOp2Ad9NC?backgroundColor=grayDusty"
                frameBorder="0"
                onWheel={() => {}} // You can handle mouse wheel events here if needed
                width="100%"
                height="533"
                style={{ background: "transparent", border: "1px solid #ccc" }}
            ></iframe> */}
            <section class="bg-transparent py-12">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                    {/* <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        NoTime
                    </a> */}
                    <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white bg-opacity-10">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Enroll for the course
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)} class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <input {...register("name")} type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" required="" />
                                </div>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input {...register("email")} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Notime@gmail.com" required="" />
                                </div>
                                <div>
                                    <label for="college" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your college</label>
                                    <input {...register("college")} type="text" name="college" id="college" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="college" required="" />
                                </div>
                                <div>
                                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone</label>
                                    <input {...register("phone")} type="email" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+91" required="" />
                                </div>
                                <div>
                                    <label for="year" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year of Study</label>
                                    <input {...register("year")} type="text" name="year" id="year" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="year" required="" />
                                </div>
                                <div>
                                    <label for="branch" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Branch of Study</label>
                                    <input {...register("branch")} type="text" name="branch" id="branch" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="IT / CS / EC etc" required="" />
                                </div>
                                <div>
                                    <label for="linkedin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">linkedin URL</label>
                                    <input {...register("linkedin")} type="text" name="linkedin" id="linkedin" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="linkedin.com/" required="" />
                                </div>
                                <div>
                                    <label for="github" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Github URL</label>
                                    <input {...register("github")} type="text" name="github" id="github" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://github.com/" required="" />
                                </div>
                                <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enroll Now</button>
                                {/* <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                </p> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Index;
