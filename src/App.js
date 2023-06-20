// App.js
import React from "react";
import NameList from "./NameList";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

function App() {
  return (
    <AppContainer>
      <h1>Baby Names</h1>
      <NameList />
    </AppContainer>
  );
}

export default App;
