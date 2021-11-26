import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseItemDates from './ExpenseItemDates';
import Card from './Card';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    let expenseDate = props.date;
    let expenseTitle = props.title;
    let expenseAmount = props.amount;

    const clickHandler = () => {
        setTitle('Updated!');
        console.log('Clicked!!!');
    };

    return (
        <Card className="expense-item">
            <div><ExpenseItemDates date={expenseDate}/></div>
            <div  className="expense-item__description">
                <h2>{title}</h2>
            </div>
            <div  className="expense-item__price">
                ${expenseAmount}
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;