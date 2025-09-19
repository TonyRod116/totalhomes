import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #fff;
  }

  html {
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section {
    padding: 80px 0;
  }

  .btn {
    display: inline-block;
    padding: 12px 30px;
    background-color: #2c5aa0;
    color: white;
    border-radius: 5px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #1e3d6f;
      transform: translateY(-2px);
    }
  }

  .btn-secondary {
    background-color: transparent;
    color: #2c5aa0;
    border: 2px solid #2c5aa0;

    &:hover {
      background-color: #2c5aa0;
      color: white;
    }
  }
`;
