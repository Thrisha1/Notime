import { useSession,getSession } from "next-auth/react";
import React from "react";

export default function index() {
    const { data: session } = useSession();
    console.log(session)
  return (
    <div>
        <h1>Dashboard</h1>
        <div className="my-6">

            <img className="w-20 h-20" src={session.user.picture} alt="" />
            <h1 className="text-4xl">Hii {session?.user.name} </h1>
        </div>
        <div className="mt-6">
            <h1>here are your courses</h1>
        </div>
    </div>
  );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
  
    if (!session) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  
    return {
      props: { session },
    };
  }
