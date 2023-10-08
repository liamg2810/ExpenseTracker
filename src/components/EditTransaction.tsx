import { MouseEvent, useState } from "react";

interface Props {
  index: number;
  editTransaction: (
    index: number,
    type: number,
    name: string,
    amount: number
  ) => void;
  setEditingTransaction: (p: boolean) => void;
}

function EditTransaction({
  index,
  editTransaction,
  setEditingTransaction,
}: Props) {
  const [activeType, setActiveType] = useState(0);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const handleChildElementClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="edit-transaction"
      onClick={() => setEditingTransaction(false)}
    >
      <div
        className="edit-transaction-content"
        onClick={(e: MouseEvent<HTMLDivElement>) => handleChildElementClick(e)}
      >
        <h1 className="edit-transaction-header">Edit Transaction</h1>

        <>
          <ul className="list-group">
            <li
              className={
                "list-group-item " + (activeType === 0 ? "active" : "")
              }
              onClick={() => setActiveType(0)}
            >
              Income
            </li>
            <li
              className={
                "list-group-item " + (activeType === 1 ? "active" : "")
              }
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
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="number"
          className="form-control"
          placeholder="Amount"
          step="0.01"
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <br />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            editTransaction(index, activeType, name, amount);
            setEditingTransaction(false);
          }}
        >
          Edit Transaction
        </button>
      </div>
    </div>
  );
}

export default EditTransaction;
