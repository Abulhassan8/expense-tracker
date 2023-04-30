import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../General-UI/Card";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import './Expenses.css';

const Expenses = (props) => {
  const expenses = props.items;

  const [filteredYear, setFilteredyear] = useState('2020')

  const selectedYearhandler = (year) => {
    setFilteredyear(year);
  }

  return <Card className="expense-wrapper">
    <ExpenseFilter selected={filteredYear} onSelectYear={selectedYearhandler}/>

    <div className="expense">
      <ExpenseItem 
        title={expenses[0].title}
        date={expenses[0].date}
        price={expenses[0].price}
      />
    </div>
    <div className="expense">
      <ExpenseItem 
        title={expenses[1].title}
        date={expenses[1].date}
        price={expenses[1].price}
      />
    </div>
  </Card>
};

export default Expenses;