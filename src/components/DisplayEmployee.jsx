import React from 'react';
import { NavLink } from 'react-router-dom';

const DisplayEmployee = ({ employee }) => {
  return (
    <tr key = {employee.id}>
      <td>{employee.id}</td>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.emailId}</td>
      <td>
        <NavLink className="btn btn-info" to={`/update-employee/${employee.id}`}>Update</NavLink>
      </td>
    </tr>
  )
}

export default DisplayEmployee;