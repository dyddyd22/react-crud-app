import React from "react";
import "./ExpenseItem.css";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = (props) => {
  return (
    <>
      <li className="item">
        <div className="info">
          <span className="expense">{props.item.charge}</span>
          <span className="amount">{props.item.amount}</span>
        </div>
        <div>
          <button className="edit-btn">
            <MdEdit />
          </button>
          <button
            className="clear-btn"
            onClick={() => props.handleDelete(props.item.id)}
          >
            <MdDelete />
          </button>
        </div>
      </li>
    </>
  );
};

export default ExpenseItem;
