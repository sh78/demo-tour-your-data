import React from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import HeaderBar from "./components/HeaderBar";

function App() {
  return (
    <div className="App">
      <Container as="main" id="main-content" fluid="lg">
        <HeaderBar />
        <h1>All Tables</h1>
      </Container>
    </div>
  );
}

export default App;
