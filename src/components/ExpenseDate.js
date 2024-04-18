import React from "react";
 import "./ExpenseDate.css"

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const ExpenseDate = (props) =>{
    return(
        <div className="expense-date">
            <div className="expense-date__month">{months[props.date.getMonth()]}</div>
            <div className="expense-date__year">{props.date.getFullYear()}</div>
            <div className="expense-date__day">{props.date.getDate()}</div>
        </div>
    )
}

export default ExpenseDate