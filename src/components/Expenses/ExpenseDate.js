import React from "react";

import "./ExpenseDate.css";
function ExpenseDate(props) {
  return (
    <div className="expense-date">
      <div className="expense-date__month">
        {props.date.toLocaleString("en-IN", { month: "long" })}
      </div>
      <div className="expense-date__date">
        {props.date.toLocaleString("en-US", { day: "2-digit" })}
      </div>
      <div className="expense-datwe__year ">{props.date.getFullYear()}</div>
    </div>
  );
}

export default ExpenseDate;
