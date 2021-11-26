import ExpenseItem from "./ExpenseItem"
import './Expenses.css'


function Expenses(props) {
    let expenses = props.expenses.map(expense => {
        return <ExpenseItem classNam="expenses" title={expense.title} amount={expense.amount} date={expense.date}/>
    });

    return expenses;
}

export default Expenses;