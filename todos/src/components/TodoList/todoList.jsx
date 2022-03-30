import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './todoList.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  add,
  remove,
  updateStatus,
  updateContent,
} from '../../redux/Slice/todoSlice';

TodoList.propTypes = {};
TodoList.defaultProps = {};

function TodoList(props) {
  const [hide, sethide] = useState(false);
  const [inputId, setInputID] = useState();
  const [content, setContent] = useState('');
  const handleClick = (todo) => {
    const action = remove(todo.id);
    dispatch(action);
  };
  const handleChangeCheckBox = (e, todoId, todoContent) => {
    const action = updateStatus({
      id: todoId,
      content: todoContent,
      status: e.target.checked,
    });
    dispatch(action);
  };

  const dispatch = useDispatch();
  const { newList, type } = useSelector((state) => state.todoList);

  const handleUpdate = (todo) => {
    sethide(true);
    setInputID(todo.id);
    setContent(todo.content);
  };
  const handleKeyPress = (e, idTodo, contentTodo) => {
    if (e.key === 'Enter') {
      const action = updateContent({
        id: idTodo,
        content: contentTodo,
      });
      dispatch(action);
      sethide(false);
    }
   
  };
  
  const display = newList.filter((item) => {
    switch (type) {
      case 'ACTIVE':
        return !item.status;
      case 'COMPLETE':
        return item.status;
      default:
        return true;
    }
  });
  
  return (
    <div className="list-group">
      {display.map((todo) => (
        <div key={todo.id} className="list-item">
          <div className="list-container">
            <input
              type="checkbox"
              checked={todo.status}
              onChange={(e) => handleChangeCheckBox(e, todo.id, todo.content)}
              className="check-box"
            />
            <label
              className={`${todo.status === true ? 'decorator' : ''} ${
                hide === true && todo.id === inputId ? 'hide-item' : ''
              }`}
              onDoubleClick={() => handleUpdate(todo)}
            >
              {todo.content}
            </label>
            {todo.id === inputId && (
              <input
                type="text"
                className={
                  hide === false && todo.id === inputId ? 'hide-item' : ''
                }
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, todo.id, content)}
              />
            )}
          </div>
          <div>
            <input type="button" onClick={() => handleClick(todo)} value="X" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
