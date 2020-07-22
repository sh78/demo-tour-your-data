import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

type DataTableProps = {
  title: string
}

function DataTable(props: DataTableProps) {
  return (
    <>
      <h1>{props.title}</h1>
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
              <Button variant="primary">View</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default DataTable;
