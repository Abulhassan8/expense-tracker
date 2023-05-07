import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../General-UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props)  => {
  const [title, setItem] = useState(props.title);

  const clickHandler = () => {
    setItem('Cover')
  }
  
  return <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h3>{title}</h3>
        <div className="expense-item__price">{props.price}</div>
      </div>
      <button onClick = {clickHandler}>Edit Entry</button>
    </Card>
  </li>
    
}

export default ExpenseItem;