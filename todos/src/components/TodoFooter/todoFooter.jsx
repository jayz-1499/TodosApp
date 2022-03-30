import React from 'react';
import PropTypes from 'prop-types';
import './todoFooter.css';
TodoFooter.propTypes = {

};
TodoFooter.defaultProps = {
  
};
function TodoFooter(props) {
  
  return (
    <div className="todoFooter-container">
      <div>
        <label>{} item left</label>
      </div>
      <div>
        <input type="button" value="All"  />
        <input type="button" value="Active"  />
        <input type="button" value="Complete"  />
      </div>
      <div>
        <input type="button" value="Clear" />
      </div>
    </div>
  );
}

export default TodoFooter;
