import React, {useState} from 'react';
import './App.css';
import TodoBoard from './component/TodoBoard';

// 1.인풋창 만들기
// 2.인풋창에 입력한 값 읽는 방법
// 3. 버튼 클릭 이벤트 함수 만들기
// 4.컴포넌트 만들기
// 5. 스타일 만들기
// 6. 할 일 리스트 보여주기
// 7. 삭제하기 버튼 만들기 
function App () {
  const [inputValue, setInputValue] = useState(''); 
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
  
    setTodoList([...todoList, inputValue])
  }
  return (  
    <main>
      <input value={inputValue} type="text" onChange={(event) => setInputValue(event.target.value) }/>
      <button onClick={addItem}>Add</button>

      <TodoBoard todoList={todoList} />
    </main> 
  );
}  

export default App;
 