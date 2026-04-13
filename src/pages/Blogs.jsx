import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";

const Blogs = () => {
  return (
    <div className="min-h-screen pt-14 bg-gray-100">
      <BlogsComp />
      <ScrollToTopButton />
    </div>
  );
};

export default Blogs;
