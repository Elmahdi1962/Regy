import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTables } from './tablesSlice';
import TableItem from './TableItem';
import './tables.css';

function Tables() {
  const tables = useSelector(selectTables);

  return (
    <div className='tablesContainer'>
      <div className='addTableBtn-left'><span>+</span></div>

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
