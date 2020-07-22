import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  const [ToroData, setToroData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      return await axios(`https://interview.torodata.io/tables/`);
    };

    fetchData().then((response: AxiosResponse) => {
      setToroData(response.data);
    });
  }, []);

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
          {ToroData.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.schema}</td>
              <td>{item.columns.length}</td>
              <td>
                <Link to={`/tables/${item.id}`}>
                  <Button variant="primary">View</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default DataTable;
