import React from 'react'
import Image from 'next/image'
import Cardbg from "../../../../../../public/assets/card-background.png"


function Index({name,img}) {
  return (

    <div id="card_we" class="flex flex-col justify-center items-center w-[16rem] sm:w-[20rem] h-56 rounded-3xl shadow-md bg-transparent">

      <Image src={img} className="mb-4 hover:rotate-45" alt="" />
      <div className="text-center ">
          <button className="text-white text-xl sm:text-3xl tracking-widest sm:tracking-[10px] font-bold">
            {name}
          </button>
      </div>

    </div>

  )
}

export default Index