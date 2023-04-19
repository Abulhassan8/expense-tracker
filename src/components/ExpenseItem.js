import './ExpenseItem.css';
import PropTypes from 'prop-types';

function ExpenseItem() {
  return <div className="expense-item">
    <div>April 19, 2023</div>
    <div className="expense-item__description">
      <h3>Shoes</h3>
      <div className="expense-item__price">2567</div>
    </div>
  </div>
}

export default ExpenseItem;