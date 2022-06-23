import React from 'react'

function RowItem({ row=null, isHeader=false, columns=null}) {
  return (
    <tr>
      {
        isHeader ?
          columns.map((col) => <th scope="col" key={col}>{col}</th>)
        :
          Object.values(row).map((val) => <td key={val}>{val}</td>)
      }
    </tr>  
  )
}

export default RowItem
