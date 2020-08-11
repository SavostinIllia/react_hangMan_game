import React from "react";
import ReactDOM from "react-dom";
import HangManPage from "./containers/HangManPage";
import styled from "styled-components";
import GlobalStyle from "./Styles/GlobalStyle";

const HangManPageWrapper = styled.section`
  min-height: 100vh;
  background: #16a085;
  overflow: hidden;
  position: relative;
`;

ReactDOM.render(
  <React.StrictMode>
    <HangManPageWrapper>
      <HangManPage />
    </HangManPageWrapper>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
