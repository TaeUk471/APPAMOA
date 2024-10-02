"use client";

import { createGlobalStyle} from "styled-components";

import theme from "./theme"; 

const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-size: ${theme.fontSize.normal};
    font-family: "DMSans", "Inter", sans-serif;
    background-color: ${theme.color.gray_500};
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button, textarea {
    all: unset;
  }

  /* Global Theme Styles */
  h1, h2, h3, h4, h5, h6 {
    color: ${theme.color.black_900};
  }

  a {
    color: ${theme.color.blue_400};
    text-decoration: none;
  }

  /* Media Queries */
  @media ${theme.device.mobile} {
    body {
      font-size: ${theme.fontSize.small};
    }
  }

  @media ${theme.device.tablet} {
    body {
      font-size: ${theme.fontSize.large};
    }
  }
`;

export default GlobalStyle;
