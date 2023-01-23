import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetails';



const ExpenseItem=(props) =>{
    const clickHandler= () => {
        console.log('Clicked!!');
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetail t={props.title} a={props.amount}></ExpenseDetail>
            <div className='expense-item__location'>{props.location}</div>
            <button onClick={clickHandler}>Delete Expense</button>
        </Card>
    );

}

export default ExpenseItem;