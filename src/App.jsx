import './component/todo/todo.css';
import TodoData from './component/todo/TodoData';
import TodoNew from './component/todo/TodoNew';
import reactLogo from './assets/react.svg';

const name = 'HuyBro';
const age = 20;
const App = (props) => {
  console.log('App component rendered', props);
  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoNew />
      <TodoData
        name={name}
        age={age}
      />
      <div className="todo-image">
        <img src={reactLogo} alt="" />
      </div>
    </div>
  );
};

export default App;
