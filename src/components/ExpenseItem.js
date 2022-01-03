import React from "react";
import './ExpenseItem.css';

export default function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 27th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$243.24</div>
      </div>
    </div>
  );
}
