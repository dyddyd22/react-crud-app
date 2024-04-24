import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = ({ initalExpenses, handleDelete }) => {
  return (
    <>
      <ul className="list">
        {initalExpenses.map((item) => {
          return (
            <ExpenseItem
              item={item}
              key={item.id}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
      <button className="btn">목록지우기</button>
    </>
  );
};

export default ExpenseList;
