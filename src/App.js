import './App.css';
import Header from './components/Header';
import TaskInput from './components/TaskInput';

function App() {
  return (
    <div className="todo-application">
      <div className="todo-wrapper">
      <Header />
        <div className="divider"></div>
        <div className="todo-body">
          <TaskInput />
        </div>
      </div>
    </div>
  );
}

export default App;
