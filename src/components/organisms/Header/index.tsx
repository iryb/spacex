import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Menu } from "../../molecules/Menu";
import IconButton from "../../atoms/IconButton";
import { Link } from "react-router-dom";

const HeaderStyled = styled.header<{ $headerScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  z-index: 10;
  border-bottom: 1px solid transparent;
  transition: all 300ms;
  .favorites {
    position: absolute;
    right: 70px;
    top: 10px;
    @media (min-width: 641px) {
      position: static;
    }
  }
  ${({ $headerScrolled }) =>
    $headerScrolled === true &&
    css`
      backdrop-filter: blur(5px);
      border-bottom: 1px solid var(--secondary-color);
    `}}
`;

const HeaderWrapper = styled.div`
  max-width: 1200px;
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
  a {
    text-decoration: none;
    color: #fff;
  }
`;

const MobileMenu = styled(Menu)<{ $isOpened: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  top: -100%;
  display: none;
  ${({ $isOpened }) =>
    $isOpened &&
    css`
      display: flex;
      top: 100%;
      background-color: var(--secondary-color);
    `}
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
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [windowDimension, setWindowDimension] = useState<number>(0);
  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setHeaderScrolled(window.pageYOffset > 200)
      );
    }
  }, []);

  //Check window size
  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const isMobile = windowDimension <= 640;

  return (
    <HeaderStyled $headerScrolled={headerScrolled}>
      <HeaderWrapper>
        <Logo>
          <Link to={"/"}>SpaceX</Link>
        </Logo>
        {isMobile ? (
          <>
            <MobileMenu
              type="vertical"
              links={menuLinks}
              $isOpened={isMobileMenuOpened}
            />
            {isMobileMenuOpened ? (
              <IconButton
                variant="primary"
                icon="remove"
                onClick={() => setMobileMenuOpened(!isMobileMenuOpened)}
                className="menu-toggle"
              />
            ) : (
              <IconButton
                variant="primary"
                icon="menu"
                onClick={() => setMobileMenuOpened(!isMobileMenuOpened)}
                className="menu-toggle"
              />
            )}
          </>
        ) : (
          <Menu type="horizontal" links={menuLinks} />
        )}

        <IconButton
          variant="primary"
          icon="favorite"
          href="/favorites"
          className="favorites"
        />
      </HeaderWrapper>
    </HeaderStyled>
  );
};
