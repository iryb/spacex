import React from "react";
import styled from "styled-components";
import { Menu } from "../../molecules/Menu";
import IconButton from "../../atoms/IconButton";

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  z-index: 10;
`;

const HeaderWrapper = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: auto;
  padding: 0 clamp(15px, 3vw, 40px);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

const Logo = styled.div`
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: clamp(16px, 1.5vw, 20px);
  color: #fff;
`;

const menuLinks = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/tours",
    title: "Tours",
  },
  {
    href: "/about",
    title: "About",
  },
];

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderWrapper>
        <Logo>SpaceX</Logo>
        <Menu type="horizontal" links={menuLinks} />
        <IconButton variant="primary" icon="favorite" href="/favorites" />
      </HeaderWrapper>
    </HeaderStyled>
  );
};
