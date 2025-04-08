import React from "react";
import { useLocation } from "react-router-dom";
import BlogsComp from "../components/Blogs/BlogsComp";

const BlogsDetails = (props) => {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const { image, title, description } = location.state;

  return (
    <div className="pt-30">
      <div className="h-[300px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container ">
        <h1 className="text-2xl font-semibold mt-3" >{title}</h1>
        <p>{description}</p>
      </div>
      <BlogsComp />
    </div>
  );
};

export default BlogsDetails;
