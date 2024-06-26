import React from "react";
import { Banner } from "../../organisms/Banner";
import { ToursGrid } from "../../templates/ToursGrid";

export const Tours = () => {
  return (
    <>
      <Banner title="Tours" image="/assets/tours-banner.jpg" height="small" />
      <ToursGrid />
    </>
  );
};
