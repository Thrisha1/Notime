import React from "react";
import Courses from "../../common/UI/Courses";
import Navbar from "../../common/components/Navbar";

const index = () => {
  return (
    <div className="overflow-x-hidden">
     <Navbar/>
    <div className="flex items-center justify-center w-full">
      <section className="md:bg-white bg-opacity-20 w-max">
        <div className="py-8 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-center text-gray-300">Contact
            Us</h2>
          <p className="mb-4 lg:mb-8 font-light text-center text-gray-400 sm:text-xl">Got a
            technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us
            know.</p>
          <form action="mailto:servicesnotime@gmail.com" method="post" enctype="text/plain" className="">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your
                email</label>
              <input type="email" id="email"
                     className="shadow-sm bg-gray-150  text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                     placeholder="name@flowbite.com" required/>
            </div>
            <div className="my-4">
              <label htmlFor="subject"
                     className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
              <input type="text" id="subject"
                     className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm "
                     placeholder="Let us know how we can help you" required/>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300 ">Your
                message</label>
              <textarea id="message" rows="6"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg shadow-sm"
                        placeholder="Leave a comment..."></textarea>
            </div>
            <div className="flex w-full items-center justify-center pt-4">
              <button type="submit" value="send"
                      className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-gray-300 text-gray-900">Send
                message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
    </div>
  );
};

export default index;
