import React from "react";
import { Banner } from "../../organisms/Banner";
import { ToursCarousel } from "../../templates/ToursCarousel";
import { Card } from "../../organisms/Card";

const slides = [
  { image: "/assets/banner.jpg", title: "Title", description: "desc" },
  { image: "/assets/banner.jpg", title: "Title2", description: "desc2" },
  { image: "/assets/banner.jpg", title: "Title3", description: "desc3" },
  { image: "/assets/banner.jpg", title: "Title4", description: "desc4" },
  { image: "/assets/banner.jpg", title: "Title5", description: "desc5" },
];

export const Home = () => {
  return (
    <>
      <Banner title="Plan your space trip" image="/assets/banner.jpg" />
      <ToursCarousel slides={slides} />
    </>
  );
};
