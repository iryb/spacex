import React, { FC } from "react";
import styled from "styled-components";

interface ButtonGroupProps {
  children: NonNullable<React.ReactNode>;
}

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const ButtonGroup: FC<ButtonGroupProps> = ({ children }) => {
  return (
    <StyledContainer>
      {React.Children.map(children, (child) =>
        child ? <div>{child}</div> : null
      )}
    </StyledContainer>
  );
};
