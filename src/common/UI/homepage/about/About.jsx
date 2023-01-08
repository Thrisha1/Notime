import React from "react";

function About() {
  return (
    <div className="flex w-full my-32">
      <div className="w-1/2 flex justify-center items-center text-white">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi <br />
          perferendis amet eaque vitae pariatur iusto mollitia necessitatibus
          eius <br />
          quis sequi omnis a itaque dolorem saepe voluptatibus voluptatem, nisi,{" "}
          <br />
          ad eos magni adipisci molestiae sapiente dolor. Quae earum iure <br />
          accusamus repellat quisquam a fugit saepe magnam.
        </p>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <h1 className=" text-4xl text-right md:text-7xl font-black text-gray-300" >
          WHY <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-indigo-800 to-blue-800 ">
            NO
          </span>
          TIME?
        </h1>
      </div>
    </div>
  );
}

export default About;
