import React from 'react';
import './tableItem.css';
import { selectTable, clearSelectedTable } from '../selection/selectionSlice';
import { removeTable } from './tablesSlice';
import { removeRowsOfTable } from '../rows/rowsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { selectSelectedTableId } from '../selection/selectionSlice';

function TableItem({ table }) {
  const [selected, setSelected] = useState(false);
  const selectedTableId = useSelector(selectSelectedTableId);
  const dispatch = useDispatch();
  const tableSelectHandler = (e) => {
    e.preventDefault();
    setSelected(true);
    dispatch(selectTable({id: table.id}));
  }

  const handleTableDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const id = table.id;
    dispatch(clearSelectedTable());
    dispatch(removeRowsOfTable({tableId: id}));
    setSelected(false);
    dispatch(removeTable({id}))
  };

  useEffect(() => {
    if(table.id !== selectedTableId) {
      setSelected(false);
    }
  }, [selected, selectedTableId])
  

  return (
    <div className={selected ? 'tableItem selectedTable': 'tableItem'} onClick={tableSelectHandler}>
      <p>{table.title}</p>
      <button className="tableDeleteBtn" onClick={handleTableDelete}>X</button>
    </div>
  )
}

export default TableItem
