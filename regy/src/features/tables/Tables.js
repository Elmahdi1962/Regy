import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTables, addTable } from './tablesSlice';
import TableItem from './TableItem';
import './tables.css';

function Tables() {
  const dropdown = useRef();
  const dispatch = useDispatch();
  const tables = useSelector(selectTables);
  const handleDropDownClick = (e) => {
    e.preventDefault();
    e.target.classList.toggle('activeDropDownBtn');
    document.querySelector('.addTableBtnDropDown').classList.toggle('addTableBtnDropDownOpen');
  };

  const handleNewTableSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const columns = e.target.columns.value.replace(/(\r\n|\n|\r|\s)/gm, "").split(',');
    dispatch(addTable({title, columns}));
    dropdown.current.click();
  };

  return (
    <div className='tablesContainer'>
      <button className='addTableBtn' >
        <span onClick={handleDropDownClick} ref={dropdown}>+</span>
        <div className="addTableBtnDropDown" onClick={(e)=>{e.stopPropagation();}}>
          <form onSubmit={handleNewTableSubmit}>
            <label htmlFor="title">Title</label>
            <input name="title" type="text" placeholder="Table Title" required/>
            <label htmlFor="columns">Columns</label>
            <textarea name="columns" type="text" placeholder="Example: name,score,class..." required/>
            <input type="submit" value="Add Table"/>
          </form>
        </div>
      </button>

      <div className='tableItemsContainer'>
        {
          Object.entries(tables).length > 0 ?
            Object.entries(tables).map(([key, value]) => 
            <TableItem table={value} key={key}/>)
          :
            <></>
        }
      </div>
    </div>
  );
}

export default Tables;
