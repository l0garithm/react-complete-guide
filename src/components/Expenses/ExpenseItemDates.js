import './ExpenseItemDates.css';

function ExpenseItemDates(props) {
    let month = props.date.toLocaleString('en-US', { month: 'long'});
    let year = props.date.getFullYear();
    let day = props.date.toLocaleString('en-US', { day: '2-digit'});

    return (
        <div className="wrapper">
            <div className="month">{month}</div>
            <div className="year">{year}</div>
            <div className="day">{day}</div>
        </div>
    );
}

export default ExpenseItemDates;