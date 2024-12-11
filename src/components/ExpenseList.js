import React from "react";
import ExpenceItem from "./expenceitems";
import './ExpenseList.css';

const ExpenseList = (props) => {
    if(props.items.length === 0){
        return <h2 className="expense-list__fallback">Found no expenses.</h2>
    }

    return(
        <ul className="expense-list">
            {props.items.map((expenses) => <ExpenceItem key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date}/>)}
        </ul>
    )
}
export default ExpenseList;