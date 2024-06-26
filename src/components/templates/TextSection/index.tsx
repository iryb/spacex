import React from "react";
import styled from "styled-components";
import { Wrapper } from "../../../globalStyles";

type TextSectionProps = {
  children: React.ReactNode;
};

const TextSectionStyled = styled.section`
  padding: clamp(80px, 5vw, 120px) 0;
  color: #fff;
  font-size: 18px;
  text-align: center;
  .wrapper {
    max-width: 700px;
  }
`;

export const TextSection = ({ children }: TextSectionProps) => {
  return (
    <TextSectionStyled>
      <Wrapper className="wrapper">{children}</Wrapper>
    </TextSectionStyled>
  );
};
