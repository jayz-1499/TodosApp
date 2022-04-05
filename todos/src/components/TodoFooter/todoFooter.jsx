import React from 'react';
import PropTypes from 'prop-types';
import './todoFooter.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterTodo, clearAllTodo } from '../../redux/Slice/todoSlice';
import { Link } from "react-router-dom";

function TodoFooter(props) {
  const dispatch = useDispatch();
  const { newList } = useSelector((state) => state.todoList);
  const itemleft = newList.filter((item) => item.status === false);

  const handleFilter = (type1) => {
    dispatch(filterTodo(type1));
  };
  const clearAll = () => {
    dispatch(clearAllTodo(false));
  };
  if (!newList.length) {
    return null;
  }
  return (
    <div className="todoFooter-container">
      <div>
        <label>{itemleft.length} item left</label>
      </div>
      <div>
        <Link to="/">
        <input type="button" value="All" onClick={() => handleFilter('ALL')} />
        </Link>
        <Link to="/Active"> 
        <input
          type="button"
          value="Active"
          onClick={() => handleFilter('ACTIVE')}
        />
        </Link>
        <Link to="/Complete">
        <input
          type="button"
          value="Complete"
          onClick={() => handleFilter('COMPLETE')}
        />
        </Link>
      </div>
      <div>
        <input type="button" value="Clear" onClick={clearAll} />
      </div>
    </div>
  );
}

export default TodoFooter;
