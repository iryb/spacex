import { FC } from "react";
import styled, { css } from "styled-components";
import { Link } from "../../atoms/Link";

interface MenuProps {
  type?: "horizontal" | "vertical";
  links: {
    href: string;
    title: string;
  }[];
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
      {links.map(({ href, title }, index) => (
        <Link key={index} href={href}>
          {title}
        </Link>
      ))}
    </StyledContainer>
  );
};
