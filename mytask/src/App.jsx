import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today"> <i>Empty dishwasher</i></Task> 
      <Task title="Laundry" deadline="Tomorrow"> 
        <i>Fold laundry and put away</i>
        </Task> 
      <Task title="Tidy" deadline="Today" />
    </div>
  );
}

export default App;
