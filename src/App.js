import ExpenseItem from './components/ExpenseItem';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <ExpenseItem 
        date={'19/04/2023'}
        item={'Battery'}
        price={'2000'}
      />
    </div>
  );
}

export default App;
