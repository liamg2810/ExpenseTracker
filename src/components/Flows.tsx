import Flow from "./Flow";

interface Props {
  inflow: string;
  outflow: string;
}

function Flows({ inflow, outflow }: Props) {
  return (
    <div className="flows white">
      <Flow color="green" header="INCOME" value={inflow} />
      <div className="vr"></div>
      <Flow color="red" header="EXPENSE" value={outflow} />
    </div>
  );
}

export default Flows;
