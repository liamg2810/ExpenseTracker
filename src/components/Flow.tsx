interface Props {
  color: string;
  header: string;
  value: string;
}

function Flow({ color, header, value }: Props) {
  return (
    <div className="flow white">
      <h3 className="header white">{header}</h3>
      <h3 className={color + " white header"}>{"$" + value}</h3>
    </div>
  );
}

export default Flow;
