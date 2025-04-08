import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            At TravelGo, we believe that travel is more than just visiting new
            places — it's about discovering new experiences, cultures, and
            perspectives. Whether you're dreaming of relaxing on a tropical
            beach, hiking through mountain trails, or exploring vibrant cities,
            our goal is to help you get there with ease and excitement.
            <br />
            <br />
            We curate the best destinations, travel tips, and guides to ensure
            every journey you take is unforgettable. With a team of passionate
            travelers and local experts, TravelGo is your trusted companion for
            planning, exploring, and sharing your adventures.
            <br />
            <br />
            Wherever you go, go with TravelGo — your journey starts here.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
