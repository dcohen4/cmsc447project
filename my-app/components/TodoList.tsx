import React from 'react'

export const TodoList = () => {
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Task</th>
        <th></th>
        <th>Priority</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td><input type="checkbox" className="checkbox" disabled checked /></td>
      </tr>
      
    </tbody>
  </table>
</div>
  )
}
