import React from "react";
import "./expensedate.css";
const ExpensesDate = ({ date }) => {
  const Month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="dates">
      <div className="date month">{Month}</div>
      <div className="date year">{year}</div>
      <div className="date day">{day}</div>
    </div>
  );
};

export default ExpensesDate;
