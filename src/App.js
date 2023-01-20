import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpanse from './components/NewExpanse/NewExpanse';
import ExpenseItem from './components/Expenses/expanseItem';

const DUMMY_EXPANSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = ()=> {
  const[expenses,setExpenses]=  useState(DUMMY_EXPANSES )
  
const addExpenseHandler=expense => {
  setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses];
  });
};

  return (
    <div>
    <NewExpanse onAddExpense={addExpenseHandler}></NewExpanse>
      <Expenses items ={expenses} />
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
