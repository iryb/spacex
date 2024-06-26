import styled from "styled-components";
import { Wrapper } from "../../../globalStyles";
import favoritesState from "../../../recoil/atoms/favoritesState";
import { useRecoilValue } from "recoil";
import { Card } from "../../organisms/Card";
import { getRandomImage } from "../../../utils/utils";

const FavoritesGridStyled = styled.section`
  padding: clamp(50px, 5vw, 80px) 0;
  color: #fff;
  .row {
    display: grid;
    gap: 20px;
    @media (min-width: 641px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .no-tours {
    text-align: center;
  }
`;

export const FavoritesGrid = () => {
  const favoritesIds = useRecoilValue(favoritesState);

  return (
    <FavoritesGridStyled>
      <Wrapper>
        {favoritesIds.length > 0 ? (
          <div className="row">
            {favoritesIds.map((id, index) => (
              <Card image={getRandomImage()} id={id} key={index} />
            ))}
          </div>
        ) : (
          <p className="no-tours">There are no favorite tours.</p>
        )}
      </Wrapper>
    </FavoritesGridStyled>
  );
};
