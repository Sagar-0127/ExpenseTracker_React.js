import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isAdding, setIsAdding] = useState(false);
  const isAddingHandler = function () {
    setIsAdding(true);
  };
  const cancelHandler = function () {
    setIsAdding(false);
  };
  const saveExpenseDataHandler = function (enteredexpenseData) {
    const expenseData = {
      ...enteredexpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsAdding(false);
  };
  return (
    <div className="new-expense">
      {!isAdding && <button onClick={isAddingHandler}>Add New Expense</button>}
      {isAdding && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
