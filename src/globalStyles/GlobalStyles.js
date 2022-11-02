import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
body{
  /* width: 100%; */
  background-color: #131415;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

:root{
  --black: #000;
}

`