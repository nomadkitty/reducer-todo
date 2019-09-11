import React, { useReducer } from 'react';

// reducers
import { initialState, todoReducer } from './reducers/todoReducer';

// components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  
  const addTodo = (item)=>dispatch({type:"ADD_ITEM", playload: item})
  const toggleTodo = (id)=>dispatch({type: "TOGGLE_ITEM", playload: id})
  const clearComplete = ()=>dispatch({type: "CLEAR_COMPLETE"})

  return (
    <div className="App">
      <h1>To Do List</h1>
        <TodoForm 
        addTodo={addTodo}
        clearComplete={clearComplete}
        />
        <TodoList 
        todosArr={state.todosArr}
        toggleTodo={toggleTodo}
        /> 
    </div>
  );
}

export default App;
