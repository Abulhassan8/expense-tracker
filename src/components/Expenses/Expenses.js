import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../General-UI/Card";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const selectedYearhandler = (year) => {
    setFilteredYear(year);
  };

  const selectedYearExpense = props.items.length? props.items.filter((expense) => expense.date.getFullYear() == filteredYear): [];

  return <Card className="expense">
    <ExpenseFilter selected={filteredYear} onSelectYear={selectedYearhandler}/>
    <ExpensesChart expenses={selectedYearExpense} />
    <ExpensesList expenses={selectedYearExpense}/>
  </Card>
};

export default Expenses;
