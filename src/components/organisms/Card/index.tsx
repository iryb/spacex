import styled from "styled-components";
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
  }
  .button {
    flex: 1;
  }
`;

export const Card = ({ image, title, description }: CardProps) => {
  const handleFavorite = () => {};

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
            Book
          </Button>
          <IconButton
            icon={"favorite"}
            variant={"secondary"}
            onClick={handleFavorite}
          />
        </div>
      </div>
    </StyledCard>
  );
};
