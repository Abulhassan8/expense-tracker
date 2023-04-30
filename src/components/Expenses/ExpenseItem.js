import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../General-UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props)  => {
  const [item, setItem] = useState(props.item);

  const clickHandler = () => {
    setItem('Cover')
  }
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h3>{item}</h3>
        <div className="expense-item__price">{props.price}</div>
      </div>
      <button onClick = {clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem;