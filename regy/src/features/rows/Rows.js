import React from 'react'
import RowItem from './RowItem'
import './rows.css'
import { selectRows, selectHeader } from './rowsSlice'
import { selectSelectedTableId } from '../selection/selectionSlice'
import { selectTables } from '../tables/tablesSlice'
import { useSelector } from 'react-redux'

function Rows() {
  const tables = useSelector(selectTables);
  const tableId = useSelector(selectSelectedTableId);
  const rows = useSelector(selectRows(tableId));
  const header = useSelector(selectHeader(tableId));

  return (
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
                rows.map((val) => <RowItem isHeader={false} row={val} key={val.id + 4}/>)
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
  )
}

export default Rows
