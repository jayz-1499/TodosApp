import React from 'react';
import PropTypes from 'prop-types';
import './todoFooter.css';
TodoFooter.propTypes = {
  itemLeft: PropTypes.number,
  getAllItems: PropTypes.func,
  getActiveItem: PropTypes.func,
  getCompletedItems: PropTypes.func,
  clear: PropTypes.func,
};
TodoFooter.defaultProps = {
  itemLeft: null,
  getAllItems: null,
  getActiveItem: null,
  getCompletedItems: null,
  clear: null,
};
function TodoFooter(props) {
  const {
    itemLeft,
    getAllItems,
    getActiveItem,
    getCompletedItems,
    clear,
  } = props;

  const handleFilterAll = () => {
    const typeFilter = 'ALL';
    if (!getAllItems) return;
    console.log(typeFilter);

    getAllItems(typeFilter);
  };
  const handleFilterActive = () => {
    const typeFilter = 'ACTIVE';
    if (!getActiveItem) return;
    console.log(typeFilter);
    getActiveItem(typeFilter);
  };
  const handleFilterComplete = () => {
    const typeFilter = 'COMPLETED';
    if (!getCompletedItems) return;
    console.log(typeFilter);

    getCompletedItems(typeFilter);
  };
  const handleClearCompete = () =>{
    const typeFilter = 'CLEAR';
    if (!clear) return;
    clear(typeFilter);
  }
  return (
    <div className="todoFooter-container">
      <div>
        <label>{itemLeft} item left</label>
      </div>
      <div>
        <input type="button" value="All" onClick={handleFilterAll} />
        <input type="button" value="Active" onClick={handleFilterActive} />
        <input type="button" value="Complete" onClick={handleFilterComplete} />
      </div>
      <div>
        <input type="button" value="Clear" onClick={handleClearCompete}/>
      </div>
    </div>
  );
}

export default TodoFooter;
