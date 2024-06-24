import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Syne:wght@400;600;700;800&display=swap');

  :root {
    --primary-color: #39dbff;
    --secondary-color: #0E185F;
    --primary-hover-color: #65b6ff;
    --secondary-hover-color: #b2b2b2;
    --primary-font: 'Lato', sans-serif;
    --secondary-font: 'Syne', sans-serif;
    --background-color: #020a46;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: var(--primary-font);
    background-color: var(--background-color);
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--secondary-font);
  }
`;

export default GlobalStyle;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 clamp(15px, 3vw, 40px);
`;
