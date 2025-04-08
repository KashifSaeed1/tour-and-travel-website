import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";



const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description:
      "India is a land of rich culture, history, and diversity. From the majestic Taj Mahal to the peaceful backwaters of Kerala, every region offers something unique. Explore bustling cities, ancient temples, scenic mountains, and vibrant festivals that will leave you enchanted and craving more.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image: Img2,
    title: "Top places to visit in US",
    description:
      "The United States is packed with stunning landscapes and iconic landmarks. Discover the natural wonders of the Grand Canyon, the charm of New York City, the magic of Disneyland, and the sunny beaches of California. There's a perfect destination for every type of traveler.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 3,
    image: Img3,
    title: "Top places to visit in Japan",
    description:
      "Japan beautifully blends tradition with modern innovation. Wander through ancient Kyoto, witness cherry blossoms in Tokyo, and marvel at Mount Fuji’s beauty. Enjoy world-class cuisine, peaceful temples, and futuristic cities in one unforgettable journey through the Land of the Rising Sun.",
    author: "Someone",
    date: "April 22, 2022",
  },
];



const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
