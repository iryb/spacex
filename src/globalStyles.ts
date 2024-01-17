import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Syne:wght@400;600;700;800&display=swap');

  :root {
    --primary-color: #D3EAFF;
    --secondary-color: #ECECEC;
    --primary-hover-color: #65b6ff;
    --secondary-hover-color: #b2b2b2;
    --primary-font: 'Lato', sans-serif;
    --secondary-font: 'Syne', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: var(--primary-font);
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--secondary-font);
  }
`;

export default GlobalStyle;
