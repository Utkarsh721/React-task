import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetails';


function ExpenseItem(props) {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetail a={props.amount} t={props.title}></ExpenseDetail>           
            <div className='expense-item__location'>{props.location}</div>
        </Card>
    );

}

export default ExpenseItem;