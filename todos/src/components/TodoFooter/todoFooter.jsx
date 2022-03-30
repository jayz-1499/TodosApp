import React from 'react';
import PropTypes from 'prop-types';
import './todoFooter.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterTodo } from '../../redux/Slice/todoSlice';

function TodoFooter(props) {
  const dispatch = useDispatch();
  const { newList } = useSelector((state) => state.todoList);
  const itemleft = newList.filter((item) => item.status === false);

  const handleFilter = (type1) => {
    dispatch(filterTodo(type1));    
  };
  return (
    <div className="todoFooter-container">
      <div>
        <label>{itemleft.length} item left</label>
      </div>
      <div>
        <input type="button" value="All" onClick={() => handleFilter('ALL')} />
        <input
          type="button"
          value="Active"
          onClick={() => handleFilter('ACTIVE')}
        />
        <input
          type="button"
          value="Complete"
          onClick={() => handleFilter('COMPLETE')}
        />
      </div>
      <div>
        <input type="button" value="Clear" />
      </div>
    </div>
  );
}

export default TodoFooter;
