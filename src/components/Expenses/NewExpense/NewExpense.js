import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { v4 as uuid } from 'uuid';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuid(),
    };
    
    props.onAddNewExpense(expenseData);
  }

  return(
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense;
