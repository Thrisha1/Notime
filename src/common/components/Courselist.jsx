import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

function Courselist({ name, img, para, state }) {
    const router = useRouter();
  return (
      <div className="w-full overflow-x-hidden px-6 flex flex-col xs:flex-row justify-center py-4  items-center  rounded-3xl bg-transparent bg-white w-full xs:h-44 md:h-60 bg-opacity-[20%] ">
        <Image width={100} height={100} src={img} className=" w-32 h-28 md:h-44 md:w-44 rounded-3xl " alt={name} />
        <div className="flex h-28 md:h-44 justify-around items-center xs:items-start flex-col ml-5 md:ml-10 text-sm text-white font-monospace gap-y-2">
          <p className="text-lg md:text-xl font-semibold tracking-widest">{name}</p>
          <p className="text-xs md:text-sm">{para}</p>
            {state === 1 ? (
              <button onClick={
                  ()=> {
                     router.push('/registration')
                  }
              } className={` bg-white text-center text-black w-24 text-xs md:text-normal md:w-32  py-2 rounded-lg tracking-widest`}>REGISTER
              </button>
            ):(
                <button className={`opacity-70 bg-white text-center text-black w-24 text-xs md:text-normal md:w-32  py-2 rounded-lg tracking-widest`}>COMING SOON</button>
            )}
        </div>
    </div>
  );
}

export default Courselist;
