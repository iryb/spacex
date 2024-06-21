import styled from "styled-components";
import { Wrapper } from "../../../globalStyles";
import favoritesState from "../../../recoil/atoms/favoritesState";
import { useRecoilValue } from "recoil";
import { Card } from "../../organisms/Card";
import { getRandomImage } from "../../../utils/utils";

const FavoritesGridStyled = styled.section`
  padding: clamp(30px, 5vw, 80px) 0;
`;

export const FavoritesGrid = () => {
  const favoritesIds = useRecoilValue(favoritesState);

  return (
    <FavoritesGridStyled>
      <Wrapper>
        {favoritesIds.map((id, index) => (
          <Card image={getRandomImage()} id={id} key={index} />
        ))}
      </Wrapper>
    </FavoritesGridStyled>
  );
};