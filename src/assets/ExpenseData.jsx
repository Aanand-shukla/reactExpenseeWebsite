import React from "react";
import "./expensedata.css";
import ExpenseItem from "./ExpenseItem";
const Expense = [
  {
    id: 1,
    item: "Pencil",
    date: new Date(2022, 3, 25),
    price: "$2",
  },
  {
    id: 2,
    item: "JavaScript Book",
    date: new Date(2022, 3, 8),
    price: "$200",
  },
  {
    id: 3,
    item: "Pens Packet",
    date: new Date(2022, 5, 29),
    price: "$20",
  },
  {
    id: 4,
    item: "Bag",
    date: new Date(2022, 3, 25),
    price: "$20",
  },
];
const ExpenseData = () => {
  return (
    <div className="expense">
      {Expense.map((e) => {
        return (
          <ExpenseItem key={e.id} item={e.item} date={e.date} price={e.price} />
        );
      })}
    </div>
  );
};

export default ExpenseData;
