import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense/NewExpense';
import './App.css';
import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';

function App() {
  const expenses = [
    {
      id: uuid(),
      title: 'Shoes',
      date: new Date(),
      price: '2500',
    },
    {
      id: uuid(),
      title: 'Bike',
      date: new Date(),
      price: '25000',
    }
  ];

  const [expenseData, setExpenseData] = useState(expenses);

  const addNewExpenseHandler = (newExpense) => {
    console.log(newExpense);
  };

  return (
    <div className="App">
      <NewExpense onAddNewExpense = {addNewExpenseHandler}/>
      <Expenses items={expenseData} />
    </div>
  );
}

export default App;
