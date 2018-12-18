import styled, { createGlobalStyle } from 'styled-components';
import { rem } from 'polished';
import Home from '../containers/Home';

export const HomeStyled = styled(Home)`
  width: 100%;
  max-width: ${rem('1250px')};
  margin: 0 auto;
`;

export const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
  */
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
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  /* Fonts */
  @font-face {
    font-family: 'HK Grotesk';
    font-weight: bold;
    font-style: normal;
    src: url('/fonts/HKGrotesk-Bold.eot'); /* IE9 Compat Modes */
    src: url('/fonts/HKGrotesk-Bold.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('/fonts/HKGrotesk-Bold.woff') format('woff'), /* Modern Browsers */
    url('/fonts/HKGrotesk-Bold.woff2') format('woff2'), /* Modern Browsers */
    url('/fonts/HKGrotesk-Bold.ttf')  format('truetype'), /* Safari, Android, iOS */
  }
  
  @font-face {
      font-family: 'HK Grotesk';
      font-weight: 500;
      font-style: normal;
      src: url('/fonts/HKGrotesk-Medium.eot'); /* IE9 Compat Modes */
      src: url('/fonts/HKGrotesk-Medium.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('/fonts/HKGrotesk-Medium.woff') format('woff'), /* Modern Browsers */
      url('/fonts/HKGrotesk-Medium.woff2') format('woff2'), /* Modern Browsers */
      url('/fonts/HKGrotesk-Medium.ttf')  format('truetype'), /* Safari, Android, iOS */
  }
  
  @font-face {
      font-family: 'HK Grotesk';
      font-weight: 300;
      font-style: normal;
      src: url('/fonts/HKGrotesk-Light.eot'); /* IE9 Compat Modes */
      src: url('/fonts/HKGrotesk-Light.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('/fonts/HKGrotesk-Light.woff') format('woff'), /* Modern Browsers */
      url('/fonts/HKGrotesk-Light.woff2') format('woff2'), /* Modern Browsers */
      url('/fonts/HKGrotesk-Light.ttf')  format('truetype'), /* Safari, Android, iOS */
  }
  
  @font-face {
      font-family: 'HK Grotesk';
      font-weight: 300;
      font-style: normal;
      src: url('/fonts/HKGrotesk-Light.eot'); /* IE9 Compat Modes */
      src: url('/fonts/HKGrotesk-Light.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('/fonts/HKGrotesk-Light.woff') format('woff'), /* Modern Browsers */
      url('/fonts/HKGrotesk-Light.woff2') format('woff2'), /* Modern Browsers */
      url('/fonts/HKGrotesk-Light.ttf')  format('truetype'), /* Safari, Android, iOS */
  }
  
  @font-face {
      font-family: 'Cutive Mono';
      font-weight: 500;
      font-style: normal;
      url('/fonts/CutiveMono-Regular.ttf')  format('truetype'),
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  /* Base styles */
  body {
    font-family: "Hk Grotesk", sans-serif;
    font-size: 16px;
    font-weight: 500;
    padding-left: ${rem('60px')};
    padding-right: ${rem('60px')};
  }
`;
