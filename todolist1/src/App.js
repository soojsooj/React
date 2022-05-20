
import { useState } from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addItem =() => {
     setTodoList([...todoList, inputValue])
  }
  return (
    <div>
      <input value={inputValue} type="text" onChange={(event) => setInputValue(event.target.value)} />
      <button onClick={addItem}>Add</button>
      <TodoBoard todoList={todoList} />
    </div>
  );
}

export default App;
