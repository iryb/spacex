import React from "react";
import styled, { css } from "styled-components";

interface BannerProps {
  height?: "large" | "small";
  title?: string;
  image: string;
}

const StyledBanner = styled.section<{ height: "large" | "small" }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  ${({ height }) =>
    height === "small" &&
    css`
      height: clamp(150px, 45vw, 400px);
    `}
  h1 {
    font-size: clamp(60px, 10vw, 140px);
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #fff;
    line-height: 1;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
    z-index: -1;
  }
`;

const StyledTitle = styled.p`
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: clamp(20px, 4vw, 50px);
  margin: 0;
`;

export const Banner = ({ height = "large", title, image }: BannerProps) => {
  return (
    <StyledBanner height={height}>
      <img src={image} alt="SpaceX" />
      <div>
        <h1>SpaceX</h1>
        <StyledTitle>{title}</StyledTitle>
      </div>
    </StyledBanner>
  );
};
