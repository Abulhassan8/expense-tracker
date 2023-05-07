import './NewExpense.css';
import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import { v4 as uuid } from 'uuid';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuid(),
    };

    props.onAddNewExpense(expenseData);
    setDisplayNewExpenseButton(true);
  };

  const[displayNewExpenseButton, setDisplayNewExpenseButton] = useState(true);

  const newExpenseButtonClickHandler = () => {
    setDisplayNewExpenseButton(false);
  };

  const cancelNewExpenseFormHandler = () => {
    setDisplayNewExpenseButton(true);
  };

  const newExpenseButton = <div className="add-new-expense">
    <button onClick={newExpenseButtonClickHandler}>Add New Expense</button>
  </div>;

  const newExpenseForm = <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelNewExpenseForm={cancelNewExpenseFormHandler}/>
    </div>;

  return displayNewExpenseButton ? newExpenseButton : newExpenseForm;
}

export default NewExpense;
