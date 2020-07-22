import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Container from "react-bootstrap/Container";
import HeaderBar from "./components/HeaderBar";
import DataTable from "./components/DataTable";
import TableDetail from "./components/TableDetail";

function App() {
  return (
    <div className="App">
      <Container fluid="lg">
        <HeaderBar />
      </Container>
      <Container as="main" id="main-content" fluid="lg">
        <Route exact={true} path="/" component={DataTable} />
        <Route
          path="/tables/:id"
          render={(props) => <TableDetail {...props} />}
        />
      </Container>
    </div>
  );
}

export default App;
