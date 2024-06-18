import React from "react";
import styled from "styled-components";
import { ButtonGroup } from "../../molecules/ButtonGroup";
import Button from "../../atoms/Button";
import IconButton from "../../atoms/IconButton";

type CardProps = {
  image: string;
  title: string;
  description: string;
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
    font-size: clamp(16px, 2vw, 22px);
    margin-top: 0;
    margin-bottom: 30px;
  }
  .card-inner {
    padding: 30px;
    box-shadow: inset 0px 0px 20px #39dbffa3;
    background-color: #39dbff38;
  }
  .description {
    color: #ccc;
    padding-bottom: 30px;
  }
  .buttons-container {
    display: flex;
  }
  .button {
    flex: 1;
  }
`;

export const Card = ({ image, title, description }: CardProps) => {
  return (
    <StyledCard>
      <div className="image-container">
        <img src={image} alt="tour" />
      </div>
      <div className="card-inner">
        <h4>{title}</h4>
        <div className="description">{description}</div>
        <div className="buttons-container">
          <Button className="button" variant={"primary"}>
            Buy
          </Button>
          <IconButton icon={"favorite"} variant={"primary"} />
        </div>
      </div>
    </StyledCard>
  );
};
