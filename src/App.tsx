import React from "react";
import { Switch, Route, Link } from "react-router-dom";
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
        <Route exact={true} path="/" component={DataTable} />
        {
          // TODO: detail view for a table's metrics
          /* <Route path="/table/:id" component={TableDetail} /> */
        }
      </Container>
    </div>
  );
}

export default App;
