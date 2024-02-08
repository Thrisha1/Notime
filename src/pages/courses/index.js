import React from "react";
import Courses from "../../common/UI/Courses/Courses";
import { client } from "../../../sanity/lib/client";

const Index = ({courseList}) => {
  console.log("courses", courseList);
  return (
    <div className="overflow-x-hidden">
      
     <Courses courseList={courseList} />
    </div>
  );
};

export async function getStaticProps() {
  const query = `*[_type == "course"] {
    title,
    slug,
    description,
    courseImage {
      asset -> {
        _id,
        url
      }
    },
    commingsoon
  }`;

  try {
    const data = await client.fetch(query);

    return {
      props: {
        courseList: data,
      },
      revalidate: 60 * 60 * 24, // Revalidate every 24 hours
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        courseList: [],
      },
      revalidate: 60 * 5, // Revalidate every 5 minutes in case of an error
    };
  }
}

export default Index;
