import React from 'react'

function RowItem({ row=null, isHeader=false, columns=null}) {
  return (
    <tr>
      {
        isHeader ?
          columns.map((col) => <th scope="col" key={col}>{col}</th>)
        :
          columns.map((val) => 
          <td key={row[val]}>{row[val]}</td>)
      }
    </tr>  
  )
}

export default RowItem
