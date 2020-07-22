import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

type DataTableProps = {
  title: string;
};

// FIXME: Type out the expected response
type AxiosResponse = {
  data: any;
};

function DataTable(props: DataTableProps) {
  // Fetch API data to State
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      return await axios(`https://interview.torodata.io/tables/`);
    };

    fetchData().then((value: AxiosResponse) => {
      console.log(value);
      setData(value);
    });
  }, []);

  return (
    <>
      <h1>All Tables</h1>
      {/*data.map((item) => (
        <li>{item}</li>
        ))*/}
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
              <Link to={`/tables/${":id"}`}>
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
