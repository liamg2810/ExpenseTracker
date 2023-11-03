import { useState } from "react";

interface Props {
  addTransaction: (type: number, name: string, amount: number) => void;
}

function AddTransaction({ addTransaction }: Props) {
  const [activeType, setActiveType] = useState(0);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <>
      <br />
      <h3>Add new transaction</h3>
      <hr />
      <>
        <ul className="list-group">
          <li
            className={"list-group-item " + (activeType === 0 ? "active" : "")}
            onClick={() => setActiveType(0)}
          >
            Income
          </li>
          <li
            className={"list-group-item " + (activeType === 1 ? "active" : "")}
            onClick={() => setActiveType(1)}
          >
            Expense
          </li>
        </ul>
      </>
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="number"
        className="form-control"
        placeholder="Amount"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
      />
      <br />
      <button
        type="button"
        className="btn btn-primary addTransaction"
        onClick={() => {
          addTransaction(activeType, name, amount);
          setActiveType(0);
          setAmount(0);
          setName("");
        }}
      >
        Add Transaction
      </button>
    </>
  );
}

export default AddTransaction;
