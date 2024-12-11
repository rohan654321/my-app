import React, { useState } from "react";
import Card from "./Card";
import ExpenceItem from "./expenceitems";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import './Expenses.css';

const Expenses = (props) =>{
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }
    const filterExpense = props.items.filter(expense => {
        console.log(expense.date.getFullYear().toString());
        console.log(filteredYear)
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return(
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpenseList items={filterExpense}/>
            {/* <ExpenceItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenceItem>
            <ExpenceItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenceItem>
            <ExpenceItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenceItem>
            <ExpenceItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenceItem> */}
        </Card>
    )
}

export default Expenses;