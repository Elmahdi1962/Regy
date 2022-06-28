import React, { useRef } from 'react'
import RowItem from './RowItem'
import './rows.css'
import { selectRows, selectHeader, addRow } from './rowsSlice'
import { selectSelectedTableId } from '../selection/selectionSlice'
import { selectTables } from '../tables/tablesSlice'
import { useSelector, useDispatch } from 'react-redux'

function Rows() {
  const form = useRef();
  const dispatch = useDispatch();
  const tables = useSelector(selectTables);
  const tableId = useSelector(selectSelectedTableId);
  const rows = useSelector(selectRows(tableId));
  const header = useSelector(selectHeader(tableId)); // columns

  const handleNewRowSubmit = (e) => {
    e.preventDefault();
    const rowdata = {};
    for(const elem of e.target.elements) {
      if(elem.type !== 'submit') {
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
