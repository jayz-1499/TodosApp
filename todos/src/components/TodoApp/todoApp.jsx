import React, { useState, useEffect } from 'react';
import TodoList from '../TodoList/todoList';
import TodoForm from '../TodoForm/todoForm';
import './todoApp.css';
import TodoFooter from '../TodoFooter/todoFooter';
import { useSelector, useDispatch } from 'react-redux';
import {add,remove,changeInput} from '../../redux/Slice/todoSlice';
function TodoApp(props) {
  
  
  return (
    <div className="container">
      <h1>TODOS</h1>
      <div className="content">
        <div className="form">
          <TodoForm  />
        </div>
        <div className="item">
          <TodoList></TodoList>
            <TodoFooter />
        </div> 
      </div>
    </div>
  );
}

export default TodoApp;
