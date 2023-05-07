import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense/NewExpense';
import './App.css';

function App() {
  const expenses = [];
  const [expenseData, setExpenseData] = useState(expenses);

  const addNewExpenseHandler = (newExpense) => {
    setExpenseData((prev) => {
      return [newExpense, ...prev];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddNewExpense={addNewExpenseHandler}/>
      <Expenses items={expenseData} />
    </div>
  );
}

export default App;
