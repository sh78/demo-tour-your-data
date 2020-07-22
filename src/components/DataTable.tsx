import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

type DataTableProps = {
  title: string
}

function DataTable(props: DataTableProps) {
  return (
    <>
      <h1>All Tables</h1>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Schema</th>
            <th>Columns</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Name</td>
            <td>Schema</td>
            <td>Columns</td>
            <td>
              <Link to="/tables/:id">
                <Button variant="primary">View</Button>
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default DataTable;
