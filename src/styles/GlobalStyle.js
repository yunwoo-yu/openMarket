import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
@font-face {
    font-family: 'SpoqaHanSans';
    src: url('SpoqaHanSans-Light.woff2') format('woff2'),
        url('SpoqaHanSans-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'SpoqaHanSans';
    src: url('SpoqaHanSans-Regular.woff2') format('woff2'),
        url('SpoqaHanSans-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'SpoqaHanSans';
    src: url('SpoqaHanSans-Bold.woff2') format('woff2'),
        url('SpoqaHanSans-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'SpoqaHanSans';
    src: url('SpoqaHanSans-Thin.woff2') format('woff2'),
        url('SpoqaHanSans-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}
*{
  box-sizing:border-box;
}

html,body{
  
  font-family:'SpoqaHanSans', sans-serif;
  font-weight: 400;
}
a{
  color:#767676;
  text-decoration: none;
}


`;
