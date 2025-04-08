import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";


const PlacesData = [
  {
    img: Img1,
    title: "Eiffel Tower",
    location: "France",
    description:
      "An iconic wrought-iron lattice tower in Paris, known for its breathtaking views of the city.",
    price: 8500,
    type: "Romantic Getaway",
  },
  {
    img: Img2,
    title: "Great Wall",
    location: "China",
    description:
      "Ancient series of walls and fortifications, totaling more than 13,000 miles in length.",
    price: 7900,
    type: "Historic Adventure",
  },
  {
    img: Img3,
    title: "Santorini",
    location: "Greece",
    description:
      "Famous for whitewashed houses with blue domes and spectacular sunsets over the Aegean Sea.",
    price: 9100,
    type: "Scenic Relaxation",
  },
  {
    img: Img4,
    title: "Machu Picchu",
    location: "Peru",
    description:
      "15th-century Inca citadel set high in the Andes Mountains, surrounded by lush cloud forest.",
    price: 8800,
    type: "Adventure Trek",
  },
  {
    img: Img5,
    title: "Niagara Falls",
    location: "Canada",
    description:
      "Majestic waterfalls that straddle the border between Canada and the USA.",
    price: 7300,
    type: "Nature Wonder",
  },
  {
    img: Img6,
    title: "Tokyo Disneyland",
    location: "Japan",
    description:
      "A magical kingdom full of attractions and beloved characters, perfect for families and kids.",
    price: 9400,
    type: "Family Fun",
  },
];


const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
