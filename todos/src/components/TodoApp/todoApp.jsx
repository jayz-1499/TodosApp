import React, { useState, useEffect } from 'react';
import TodoList from '../TodoList/todoList';
import TodoForm from '../TodoForm/todoForm';
import './todoApp.css';
import TodoFooter from '../TodoFooter/todoFooter';
function TodoApp(props) {
  const [leftItem, setLeftItem] = useState();
  const [globalCheck, setGlobalCheck] = useState(false);
  const [typeAction, setTypeAction] = useState('');
  const [checkFilter, setCheckFilter] = useState();
  const [mainTodoList, setMainTodoList] = useState(JSON.parse(localStorage.getItem('todoList')));
  const [todoList, setTodoList] = useState(mainTodoList);
  const handleToDoClick = (todo) => {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    setMainTodoList(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  };
  const handleTodoFormSubmit = (formValues) => {
    const newTodo = {
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
    setMainTodoList(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  };
  useEffect(() => {
    const checkItemLeft = () => {
      const it = mainTodoList.filter((item) => item.status === false);
      setLeftItem(it.length);
    };
    checkItemLeft();
  }, [leftItem, todoList]);

  const handleChecked = (status) => {
    const newTodoList = [...todoList];
    setGlobalCheck(status);
    newTodoList.map((item) => (item.status = status));
    setTodoList(newTodoList);
  };

  const handleCheckEachItem = (value, todo) => {
    const index = mainTodoList.findIndex((x) => x.id === todo);
    if (index < 0) return;
    const newTodoList = [...mainTodoList];
    newTodoList[index]['status'] = value;
    setTodoList(newTodoList);
    setMainTodoList(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));

  };

  const handleFilter = (type) => {
    if (type === 'ALL') {
      setTypeAction(type);
      const newTodoList = [...mainTodoList];
      setTodoList(newTodoList);
      console.log(mainTodoList);
    }
    if (type === 'ACTIVE') {
      setTypeAction(type);
      //const newTodoList = [...mainTodoList];
      const filterArr = mainTodoList.filter((item) => item.status === false);
      setTodoList(filterArr);
      console.log(mainTodoList);
      
    }
    if (type === 'COMPLETED') {
      setTypeAction(type);
      // const newTodoList = [...todoList];
      const filterArr = mainTodoList.filter((item) => item.status === true);
      setTodoList(filterArr);
    }
    if (type === 'CLEAR') {
      const filterArr = mainTodoList.filter((item) => item.status !== true);
      setTodoList(filterArr);
      setMainTodoList(filterArr);
    }
  };
  useEffect(() => {
    handleFilter(typeAction);
  }, [mainTodoList]);

  const update = (id, value) => {
    const index = todoList.findIndex((x) => x.id === id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList[index]['content'] = value;
    setTodoList(newTodoList);
    //setMainTodoList(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  };
  return (
    <div className="container">
      <h1>TODOS</h1>
      <div className="content">
        <div className="form">
          <TodoForm onSubmit={handleTodoFormSubmit} onChecked={handleChecked} />
        </div>
        <div className="item">
          <TodoList
            todos={todoList}
            onTodoClick={handleToDoClick}
            handleStatus={handleCheckEachItem}
            status={globalCheck}
            onSubmit={update}
          ></TodoList>
          {!mainTodoList.length == [] && (
            <TodoFooter
              itemLeft={leftItem}
              getAllItems={handleFilter}
              getActiveItem={handleFilter}
              getCompletedItems={handleFilter}
              clear={handleFilter}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
