import React from "react";
import styled, { css } from "styled-components";

interface BannerProps {
  height?: "large" | "small";
  title?: string;
  subtitle?: string;
  image: string;
}

const StyledBanner = styled.section<{ height: "large" | "small" }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
  }
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
  .text {
    position: relative;
  }
  ${({ height }) =>
    height === "small" &&
    css`
      height: clamp(250px, 50vw, 500px);
      h1 {
        font-size: clamp(30px, 8vw, 60px);
      }
      &:before {
        display: none;
      }
    `}
`;

const StyledTitle = styled.p`
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: clamp(20px, 4vw, 50px);
  margin: 0;
`;

export const Banner = ({
  height = "large",
  title,
  subtitle,
  image,
}: BannerProps) => {
  return (
    <StyledBanner height={height}>
      <img src={image} alt="SpaceX" />
      <div className="text">
        {title && <h1>{title}</h1>}
        {subtitle && <StyledTitle>{subtitle}</StyledTitle>}
      </div>
    </StyledBanner>
  );
};
