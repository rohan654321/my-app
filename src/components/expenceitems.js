import React from 'react';

import Card from './Card';
import './Expenceitems.css';
import ExpenseDate from './ExpenseDate';
function ExpenceItem(props){
    //const [title, setTitle] = useState(props.title);
    //console.log(title);
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenceItem;