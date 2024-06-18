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
  height: clamp(300px, 60vw, 900px);
  ${({ height }) =>
    height === "small" &&
    css`
      height: clamp(150px, 45vw, 400px);
    `}
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

const StyledTitle = styled.h1`
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: clamp(20px, 4vw, 60px);
`;

export const Banner = ({ height = "large", title, image }: BannerProps) => {
  return (
    <StyledBanner height={height}>
      <img src={image} alt="SpaceX" />
      <StyledTitle>{title}</StyledTitle>
    </StyledBanner>
  );
};
