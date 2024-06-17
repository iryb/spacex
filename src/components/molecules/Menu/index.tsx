import React, { FC } from "react";
import styled, { css } from "styled-components";
import { type Link as LinkType, Link } from "../../atoms/Link";

interface MenuProps {
  type?: "horizontal" | "vertical";
  links: LinkType[];
}

const StyledContainer = styled.div<{ type: "horizontal" | "vertical" }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(15px, 2vw, 40px);
  ${({ type }) =>
    type === "vertical" &&
    css`
      flex-direction: column;
    `}
`;

export const Menu: FC<MenuProps> = ({ type = "horizontal", links }) => {
  return (
    <StyledContainer type={type}>
      {links.map(({ href, title, isActive }, index) => (
        <Link key={index} href={href} isActive={isActive}>
          {title}
        </Link>
      ))}
    </StyledContainer>
  );
};
