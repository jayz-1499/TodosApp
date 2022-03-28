import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from '../../../node_modules/uuid/dist/v4';
import './todoForm.css';
TodoForm.propTypes = {
  onSubmit: PropTypes.func,
  onChecked: PropTypes.func,
};
TodoForm.defaultProps = {
  onSubmit: null,
  onChecked: null,
};

function TodoForm(props) {
  const { onSubmit, onChecked } = props;
  const [value, setValue] = useState('');
  const [allStatus, setAllStatus] = useState(true);
  const handleValueChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onSubmit) return;
    const formValues = {
      id: uuid(),
      content: value.trim(),
      status: false,
      hide: false,
    };

    let reg = /(.|\s)*\S(.|\s)*/g;
    if (formValues.content.trim().match(reg)) {
      onSubmit(formValues);
      setValue('');
    }
  };
  const handleStatus = () => {
    setAllStatus(!allStatus);
    if (!onChecked) return;
    onChecked(allStatus);
  };
  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <input type="button" value="↓" onClick={handleStatus} />
        <input
          type="text"
          className="input-todo"
          value={value}
          onChange={handleValueChange}
        />
      </form>
    </div>
  );
}

export default TodoForm;
