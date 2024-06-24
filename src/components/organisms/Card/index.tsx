import styled from "styled-components";
import Button from "../../atoms/Button";
import IconButton from "../../atoms/IconButton";
import { useRecoilState } from "recoil";
import favoritesState from "../../../recoil/atoms/favoritesState";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

type CardProps = {
  id: string;
  image: string;
  title?: string;
  description?: string;
};

const StyledCard = styled.div`
  border: 2px solid var(--primary-color);
  text-align: center;
  max-width: 350px;
  border-radius: 15px;
  overflow: hidden;
  .image-container {
    height: clamp(150px, 20vw, 300px);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  h4 {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: clamp(16px, 1.5vw, 18px);
    margin-top: 0;
    margin-bottom: 20px;
  }
  .card-inner {
    padding: 30px;
    box-shadow: inset 0px 0px 20px #39dbffa3;
    background-color: #39dbff38;
  }
  .description {
    color: #ccc;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 20px;
    height: 60px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-bottom: 30px;
  }
  .buttons-container {
    display: flex;
    gap: 15px;
  }
  .button {
    flex: 1;
  }
  .icon {
    padding: 0;
  }
`;

const GET_LAUNCH_BY_ID = gql`
  query GetLaunchById($launchId: ID!) {
    launch(id: $launchId) {
      id
      title: mission_name
      description: details
    }
  }
`;

export const Card = ({ id, image, title, description }: CardProps) => {
  const [favorites, setFavorites] = useRecoilState(favoritesState);
  const [cardData, setCardData] = useState({ title, description });

  const { data, loading, error } = useQuery(GET_LAUNCH_BY_ID, {
    variables: { launchId: id },
    skip: !!title && !!description, // Skip query if data is passed as props
  });

  useEffect(() => {
    if (!title || !description) {
      if (data) {
        setCardData({
          title: data.launch.title,
          description: data.launch.description,
        });
      }
    }
  }, [data, title, description]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { title: cardTitle, description: cardDescription } = cardData;

  const handleAddFavorite = () => {
    //@ts-ignore
    setFavorites([id, ...favorites]);
  };

  const handleRemoveFavorite = () => {
    //@ts-ignore
    setFavorites(favorites.filter((item) => item !== id));
  };

  return (
    <StyledCard>
      <div className="image-container">
        <img src={image} alt="tour" />
      </div>
      <div className="card-inner">
        <h4>{cardTitle}</h4>
        <div className="description">{cardDescription}</div>
        <div className="buttons-container">
          <Button className="button" variant={"primary"}>
            Book
          </Button>
          {favorites.includes(id) ? (
            <IconButton
              icon={"remove"}
              variant={"secondary"}
              onClick={handleRemoveFavorite}
              className="icon"
            />
          ) : (
            <IconButton
              icon={"favorite"}
              variant={"secondary"}
              onClick={handleAddFavorite}
              className="icon"
            />
          )}
        </div>
      </div>
    </StyledCard>
  );
};
