import React from 'react';
import './tableItem.css';
import { selectTable, selectSelectedTableId  } from '../selection/selectionSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';


function TableItem({ table }) {
  const [selected, setSelected] = useState(false);
  const selectedTableId = useSelector(selectSelectedTableId);
  const dispatch = useDispatch();
  const tableSelectHandler = (e) => {
    e.preventDefault();
    setSelected(true);
    dispatch(selectTable({id: table.id}));
  }

  useEffect(() => {
    if(table.id !== selectedTableId) {
      setSelected(false);
    }
  }, [selected, selectedTableId])
  

  return (
    <div className={selected ? 'tableItem selectedTable': 'tableItem'} onClick={tableSelectHandler}>
      <p>{table.title}</p>
    </div>
  )
}

export default TableItem
