import React, { useRef } from 'react';
import RowItem from './RowItem';
import './rows.css';
import { selectRows, selectHeader, addRow } from './rowsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { BsFillGearFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';

import { clearSelectedTable, selectSelectedTableId  } from '../selection/selectionSlice';
import { removeTable, selectTables } from '../tables/tablesSlice';
import { removeRowsOfTable } from '../rows/rowsSlice';

function Rows() {
  const form = useRef();
  const dispatch = useDispatch();
  const tables = useSelector(selectTables);
  const tableId = useSelector(selectSelectedTableId);
  const rows = useSelector(selectRows(tableId));
  const header = useSelector(selectHeader(tableId)); // columns

  const handleTableDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const id = tableId;
    const tableTitle = tables[id].title;
    const confirmDelete = window.confirm(`Do You Really want To delete the ${tableTitle} Table?`);
    if (confirmDelete) {
      dispatch(clearSelectedTable());
      dispatch(removeRowsOfTable({tableId: id}));
      dispatch(removeTable({id}))
    }
  };

  const handleNewRowSubmit = (e) => {
    e.preventDefault();
    const rowdata = {};
    for(const elem of e.target.elements) {
      if(elem.type !== 'submit' && header.includes(elem.name)) {
        rowdata[elem.name] = elem.value;
      }
    }
    rowdata.tableId = tableId;
    dispatch(addRow(rowdata));
    form.current.reset();
  };

  return (
    <>
      { tableId &&
      <form className="newRowForm" onSubmit={handleNewRowSubmit} ref={form}>
        {
        header.map((val, idx) => 
          <input name={val} type="text" placeholder={val} required key={idx}/>
          )
        }
        <input type="submit" value="Add"/>
      </form>
      }

      <div className='currentTableContainer'>
        {tableId &&
          <div className='tableSettings'>
            <BsFillGearFill className='gearIcon'/>
            <div className='tableSettingsMenu'>
              <div className='tableSettingsDeleteBtn' onClick={handleTableDelete}>
                <AiFillDelete />
                <p>Delete</p>
              </div>
              <div className='tableSettingsEditBtn'>
                <MdEdit />
                <p>Edit</p>
              </div>
            </div>
          </div>
        }
        <table className='currentTable'>
          {tableId ?
            <>
              <thead>
                <tr>
                  <th colSpan={header.length}>{tables[tableId].title}</th>
                </tr>
                <RowItem isHeader={true} columns={header}/>
              </thead>
              <tbody>
                {
                  rows && rows.length > 0 ?
                    rows.map((val) => <RowItem isHeader={false} row={val} columns={header} key={val.id + 4}/>)
                  :
                    <tr><td colSpan={header.length}>Table Empty</td></tr>
                }
              </tbody>
            </>
          :
            <tbody>
              <tr>
                <td>No Table Selected</td>
              </tr>
            </tbody>
          }
        </table>
      </div>
    </>
  )
}

export default Rows
