import React from "react";
import styled from "styled-components";

const StyledBanner = styled.section`
  height: clamp(300px, 60vw, 900px);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
  }
`;

export const Banner = () => {
  return (
    <StyledBanner>
      <img src="/assets/banner.jpg" alt="SpaceX" />
    </StyledBanner>
  );
};
