import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterYearhandler = function (selectedYear) {
    setFilteredYear(selectedYear);
    // console.log(selectedYear);
  };
  const selectedYearExpenses = props.items.filter((selectedExpense) => {
    return selectedExpense.date.getFullYear().toString() === filteredYear;
  });
  console.log(selectedYearExpenses);
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterYear={filterYearhandler}
      />
      <ExpenseChart expenses={selectedYearExpenses} />
      <ExpenseList items={selectedYearExpenses} />
    </Card>
  );
}
export default Expenses;
