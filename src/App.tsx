import React from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import HeaderBar from "./components/HeaderBar";
import DataTable from "./components/DataTable";

function App() {
  return (
    <div className="App">
      <Container fluid="lg">
        <HeaderBar />
      </Container>
      <Container as="main" id="main-content" fluid="lg">
        <DataTable title="All Tables" />
      </Container>
    </div>
  );
}

export default App;
