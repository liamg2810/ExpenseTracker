import { useState } from "react";
import AddTransaction from "./AddTransaction";
import EditTransaction from "./EditTransaction";

type HistoryItem = {
  type: number;
  name: string;
  amount: number;
};

interface Props {
  inflow: number;
  outflow: number;
  setInflow: (amount: number) => void;
  setOutflow: (amount: number) => void;
}

function History({ inflow, outflow, setInflow, setOutflow }: Props) {
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);
  const [editingTransaction, setEditingTransaction] = useState(false);
  const [editingIndex, setEditingIndex] = useState(0);
  const [trigger, setTrigger] = useState(0);

  const editTransaction = (
    index: number,
    type: number,
    name: string,
    amount: number
  ) => {
    if (name === "") return;
    if (amount === 0 || amount === undefined || amount < 0) return;

    const oldAmount = historyItems[index].amount;
    const oldType = historyItems[index].type;

    let oldInflow = inflow;
    let oldOutflow = outflow;

    if (oldType === 0) {
      oldInflow -= oldAmount;
    } else {
      oldOutflow -= oldAmount;
    }

    if (type === 0) {
      oldInflow += amount;
    } else {
      oldOutflow += amount;
    }

    setInflow(oldInflow);
    setOutflow(oldOutflow);

    const newHistory = [...historyItems];
    newHistory[index] = { type, name, amount };
    setHistoryItems(newHistory);
  };

  const addTransaction = (type: number, name: string, amount: number) => {
    if (name === "") return;
    if (amount === 0 || amount === undefined || amount < 0) return;

    if (type === 0) {
      setInflow(inflow + amount);
    } else {
      setOutflow(outflow + amount);
    }

    setHistoryItems([...historyItems, { type, name, amount }]);
  };

  return (
    <>
      <h3>History</h3>
      <hr />
      {historyItems.length !== 0 ? (
        historyItems.map((item, index) => (
          <div
            className="history white"
            key={index}
            onClick={() => {
              setEditingTransaction(true);
              setEditingIndex(index);
              setTrigger(trigger + 1);
            }}
          >
            <div className="historyName white">{item.name}</div>
            <div className="historyInfo white">
              <div className="historyAmount white">
                {(item.type === 0 ? "+" : "-") + item.amount.toFixed(2)}
              </div>
              <span
                className={
                  "historyColor " + (item.type === 0 ? "greenB" : "redB")
                }
              >
                &nbsp;
              </span>
            </div>
          </div>
        ))
      ) : (
        <h2>No Recent Transactions</h2>
      )}
      <br />
      <AddTransaction addTransaction={addTransaction} />
      {editingTransaction && (
        <EditTransaction
          index={editingIndex}
          editTransaction={editTransaction}
          setEditingTransaction={(p: boolean) => setEditingTransaction(p)}
        />
      )}
    </>
  );
}

export default History;
