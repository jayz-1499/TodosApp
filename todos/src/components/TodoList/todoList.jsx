import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './todoList.css';
TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
  handleStatus: PropTypes.func,
  status: PropTypes.bool,
  onSubmit: PropTypes.func,
};
TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
  handleStatus: null,
  status: false,
  onSubmit: null,
};

function TodoList(props) {
  const { todos, onTodoClick, handleStatus, status, onSubmit } = props;
  const [hide, sethide] = useState(false);
  const [inputId, setInputID] = useState();
  const [content, setContent] = useState('');
  const handleClick = (todo) => {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  };
  const handleChangeCheckBox = (e, todoId) => {
    if (!handleStatus) return;
    handleStatus(e.target.checked, todoId);
  };
  const handleUpdate = (todo) => {
    sethide(true);
    setInputID(todo.id);
    setContent(todo.content);
  };
  const handleSubmitUpdate = (id, value) => {
    sethide(false);
    if (!onSubmit) return;
    onSubmit(id, value);
  };
  const handleKeyPress = (e,id,content) => {
    if (e.key === 'Enter') {
      handleSubmitUpdate(id, content);
    }
  };
  console.log(content);
  
  return (
    <div className="list-group">
      {todos.map((todo) => (
        <div key={todo.id} className="list-item">
          <div className = 'list-container'>
            <input
              type="checkbox"
              checked={todo.status}
              onChange={(e) => handleChangeCheckBox(e, todo.id)}
              className="check-box"
            />
            <label
              className={`${todo.status === true ? 'decorator' : ''} ${
                hide === true  && todo.id === inputId ? 'hide-item' : ''
              }`}
              onDoubleClick={()=>handleUpdate(todo)}
            >
              {todo.content}
            </label>
           {todo.id === inputId && <input
              type="text"
              className={hide === false && todo.id === inputId ? 'hide-item' : ''}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onKeyPress={(e)=>handleKeyPress(e, todo.id, content)}
            />
           }
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
