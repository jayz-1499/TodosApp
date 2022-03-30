import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from '../../../node_modules/uuid/dist/v4';
import './todoForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../../redux/Slice/todoSlice';

function TodoForm(props) {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

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
  };
  console.log(value);

 
  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <input type="button" value="↓" />
        <input
          type="text"
          className="input-todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default TodoForm;
