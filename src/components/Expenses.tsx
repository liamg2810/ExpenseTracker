import { useState } from "react";
import Flows from "./Flows";
import History from "./History";

function Expenses() {
  const [inflow, setInflow] = useState(0);
  const [outflow, setOutflow] = useState(0);

  const getInflow = (): string => {
    return inflow.toFixed(2);
  };

  const getOutflow = (): string => {
    return outflow.toFixed(2);
  };

  return (
    <>
      <h5>YOUR BALANCE</h5>
      <h1>{"$" + (inflow - outflow).toFixed(2)}</h1>
      <br />
      <Flows inflow={getInflow()} outflow={getOutflow()} />
      <br />
      <br />
      <History
        inflow={inflow}
        outflow={outflow}
        setInflow={setInflow}
        setOutflow={setOutflow}
      />
    </>
  );
}

export default Expenses;
