import React from 'react'
import { useDispatch } from 'react-redux';
import { removeRow } from './rowsSlice';

function RowItem({ row=null, isHeader=false, columns=null}) {
  const dispatch = useDispatch();
  const handleRowDelete = (e) => {
    const id = row.id;
    const confirmDelete = window.confirm('Do you really want to delete this row?');
    e.preventDefault();
    if (confirmDelete) {
      dispatch(removeRow({id}));
    }
  };

  return (
    <tr>
      {
        isHeader ?
          columns.map((col) => <th scope="col" key={col}>{col}</th>)
        :
          columns.map((val, idx) =>
            idx !== (columns.length - 1) ?
              <td key={row[val]}>{row[val]}</td>
            :
              <td key={row[val]} style={{position: 'relative'}}>{row[val]}
                <button className="deleteRowBtn" onClick={handleRowDelete}>X</button>
              </td>
          )
      }
    </tr>  
  )
}

export default RowItem
