import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from '../../../node_modules/uuid/dist/v4';
import './todoForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, checkAll } from '../../redux/Slice/todoSlice';

function TodoForm(props) {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [allStatus, setAllStatus] = useState(true);
  const { newList, type } = useSelector((state) => state.todoList);
  const itemleft = newList.filter((item) => item.status === false);
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
  const handleStatus = () => {
    setAllStatus(!allStatus);
    dispatch(checkAll( itemleft.length!== 0 ));
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <input type="button" value="↓" onClick={handleStatus} />
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
