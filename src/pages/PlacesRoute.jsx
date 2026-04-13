import React from "react";
import Places from "../components/Places/Places";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";

const PlacesRoute = () => {
  return (
    <>
      <div className="pt-14">
        <Places />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default PlacesRoute;
