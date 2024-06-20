import React from "react";
import { Banner } from "../../organisms/Banner";
import { useRecoilState } from "recoil";
import favoritesState from "../../../recoil/atoms/favoritesState";
import { Card } from "../../organisms/Card";
import { getRandomImage } from "../../../utils/utils";

export const Favorites = () => {
  const [favorites, setFavorites] = useRecoilState(favoritesState);

  return (
    <>
      <Banner title="Favorites" image="/assets/banner.jpg" height="small" />
      {favorites.map(({ id, title, description }, index) => (
        <Card
          image={getRandomImage()}
          title={title}
          description={description}
          id={id}
          key={index}
        />
      ))}
    </>
  );
};
