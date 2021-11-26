import Expenses from "./components/Expenses/Expenses";
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

   const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2021, 7, 21)
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 7, 21)
    },
    {
      id: 'e3',
      title: 'Condoms',
      amount: 12.69,
      date: new Date(2021, 7, 21)
    },
    {
      id: 'e4',
      title: 'Socks',
      amount: 4.99,
      date: new Date(2021, 7, 21)
    },
    {
      id: 'e4',
      title: 'Socks',
      amount: 4.99,
      date: new Date(2021, 7, 21)
    },
    
  ]

  return (
    <div className="App">
      <body>
        <div className="expenseWrapper">
          <NewExpense />
          <Expenses expenses={expenses}/>
        </div>
      </body>
    </div>
  );
}

export default App;
