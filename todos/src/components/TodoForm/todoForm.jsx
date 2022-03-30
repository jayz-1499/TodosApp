import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from '../../../node_modules/uuid/dist/v4';
import './todoForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../../redux/Slice/todoSlice';


function TodoForm(props) {
  const dispatch = useDispatch();
  const newList = useSelector((state) => state.todoList);
  const [value,setValue] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(e.Key === 'Enter'){
      const formValues = {
        id: uuid(),
        content: value.trim(),
        status: false,
      };
      let reg = /(.|\s)*\S(.|\s)*/g;
      if (formValues.content.trim().match(reg)) {
        const action = add(formValues);
        dispatch(action);
        setValue('');
      }
    }
  };
  console.log(value);
  
  
  // const handleStatus = () => {
  //   setAllStatus(!allStatus);
  //   if (!onChecked) return;
  //   onChecked(allStatus);
  // };
  return (
    <div>
      <form className="form-container">
        <input type="button" value="↓" />
        <input type="text" className="input-todo" onChange={(e)=>setValue(e.target.value)} onKeyPress={handleSubmit}/>
      </form>
    </div>
  );
}

export default TodoForm;
