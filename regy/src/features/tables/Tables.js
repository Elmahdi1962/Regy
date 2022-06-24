import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTables } from './tablesSlice';
import TableItem from './TableItem';
import './tables.css';

function Tables() {
  const tables = useSelector(selectTables);
  const handleDropDownClick = (e) => {
    e.preventDefault();
    e.target.classList.toggle('activeDropDownBtn');
    document.querySelector('.addTableBtnDropDown').classList.toggle('addTableBtnDropDownOpen');
  };

  return (
    <div className='tablesContainer'>
      <button className='addTableBtn' >
        <span onClick={handleDropDownClick}>+</span>
        <div className="addTableBtnDropDown" onClick={(e)=>{e.stopPropagation();e.preventDefault();}}>
          <form>
            <label htmlFor="title">Title</label>
            <input name="title" type="text"/>
            <label htmlFor="columns">Columns</label>
            <textarea name="columns" type="text"/>
            <input type="submit" />
          </form>
        </div>
      </button>

      <div className='tableItemsContainer'>
        {
          Object.entries(tables).length > 0 ?
            Object.entries(tables).map(([key, value]) => 
            <TableItem table={value} key={key}/>)
          :
            <TableItem table={{title:'No Table', key:5}}/>
        }
      </div>
    </div>
  );
}

export default Tables;
