import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

// FIXME: need to figure out how to add a real type for render props passed in
// here. @types/react-router and /history are not working out of the box.
// type RouterProps = {
//   history: History<PoorMansUnknown>;
//   location: Location<PoorMansUnknown>;
//   match: match<any>;
//   staticContext?: StaticContext | undefined;
// };

// FIXME: Type out the expected response
type AxiosResponse = {
  data: any;
};
function TableDetail(props: any) {
  const { id } = props.match.params;

  // Fetch API data for this table's metrics to State
  const [ToroData, setToroData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      return await axios(`https://interview.torodata.io/metrics/${id}`);
    };

    fetchData().then((response: AxiosResponse) => {
      console.log(response.data);
      setToroData(response.data);
    });
  }, [id]);

  return (
    <>
      <h1>Table {id}</h1>
      {ToroData.map((item) => {
        const name = item.metric;
        const otherData = {
          column: item.column,
          currentValue: item.currentValue,
        };
        // FIXME: Took the lazy way out, time constraints
        const jsonRep = JSON.stringify(otherData, null, "    ");
        return (
          <Card key={item.id}>
            <Card.Body>
              <Card.Title>
                <code>{name}</code>
              </Card.Title>
              <Card.Text>
                <code>
                  <pre>{jsonRep}</pre>
                </code>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default TableDetail;
