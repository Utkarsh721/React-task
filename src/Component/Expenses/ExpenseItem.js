import React , {useState} from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetails';



const ExpenseItem=(props) =>{
 const [title,setTitle]  =useState(props.title);

    const clickHandler= () => {
        setTitle('Updated!');
        console.log(title);
    };
    const [amount,SetAmount]=useState(props.amount)
    const clickHandlerAmount= () => {
        SetAmount('100');
        console.log(amount);
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetail t={title} a={amount}></ExpenseDetail>
            <div className='expense-item__location'>{props.location}</div>
            <button onClick={clickHandler}>Delete Expense</button>
            <button onClick={clickHandlerAmount}>Chnage Amount</button>
        </Card>
    );

}

export default ExpenseItem;