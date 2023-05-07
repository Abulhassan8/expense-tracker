import React, { useState } from "react"

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const onTitleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const onAmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const onDateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      price: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const cancelHandler = (event) => {
    event.preventDefault();

    props.cancelNewExpenseForm();
  };

  return (
    <form onSubmit = {submitHandler}>
      <div className="new-expense-form">
        <div className="new-expense expense-item">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={onTitleChangeHandler}/>
        </div>
        <div className="new-expense expense-amount">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={onAmountChangeHandler}/>
        </div>
        <div className="new-expense expense-date">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2023-04-05" value={enteredDate} onChange={onDateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense-actions">
        <button type="reset" onClick={cancelHandler}>Cancel</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
};

export default ExpenseForm;