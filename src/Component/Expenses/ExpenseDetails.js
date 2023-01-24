import React from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
const ExpenseDetail=(props)=> {
    
    return (
        <Card>
            <div className='expense-item__price'>${props.a}
            </div>
            <div className='expense-item__description'><h2>{props.t}</h2>
            </div>
        </Card>
    );

}

export default ExpenseDetail;