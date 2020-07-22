import React from "react";
import { Switch, Route, Link } from "react-router-dom";


// FIXME: need to figure out how to add a real type for render props passed in
// here. @types/react-router and /history are not working out of the box.
// type RouterProps = {
//   history: History<PoorMansUnknown>;
//   location: Location<PoorMansUnknown>;
//   match: match<any>;
//   staticContext?: StaticContext | undefined;
// };
function TableDetail(props: any) {
  const { id } = props.match.params;

  return (
    <>
      <h1>Table {id}</h1>
    </>
  );
}

export default TableDetail;
