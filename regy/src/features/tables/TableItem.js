import React from 'react';
import './tableItem.css';

function TableItem({ table }) {

  return (
    <div className='tableItem'>
      <p>{table.title}</p>
    </div>
  )
}

export default TableItem
