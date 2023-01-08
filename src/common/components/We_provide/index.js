import React from 'react'
import Image from 'next/image'
import Cardbg from "../../../../public/assets/card-background.png"


function index({name,img}) {
  return (

    <div class="relative flex justify-center  max-w-sm h-full rounded-3xl shadow-md">

      <Image

        src={Cardbg}
        alt="Picture of the author"
        width={500}
        height={500}
        className=""
      />
      <Image src={img} className="absolute top-10" alt="" />
      <div className="absolute top-1/2 h-full text-center ">
          <button className="text-white text-3xl tracking-[10px] font-bold">
            {name}
          </button>
      </div>


    </div>

  )
}

export default index