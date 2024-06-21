import React from "react";
import { Banner } from "../../organisms/Banner";
import { FavoritesGrid } from "../../templates/FavoritesGrid";

export const Favorites = () => {
  return (
    <>
      <Banner title="Favorites" image="/assets/banner.jpg" height="small" />
      <FavoritesGrid />
    </>
  );
};
