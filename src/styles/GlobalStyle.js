import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}

*{
  box-sizing:border-box;
}
html,
body {
  font-family: "SpoqaHanSans", sans-serif;
  font-weight: 400;
}


a{
  
  text-decoration: none;
  color:black;
  
}


`;
