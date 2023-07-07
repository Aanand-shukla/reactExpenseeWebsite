import React from "react";
import "./expenseitem.css";
import ExpensesDate from "./ExpensesDate";
const ExpenseItem = ({ item, price, date }) => {
  return (
    <div className="items">
      <div className="date_and_items">
        <div>
          <ExpensesDate date={date} />
        </div>
        <div className="expense_items">{item}</div>
      </div>
      <div className="Expense_Price">
        <div className="price">{price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
