import React from 'react';
import { NavLink } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const DisplayEmployee = ({ employee, redirection }) => {

  const deleteEmployee = (id) => {
    
    EmployeeService.deleteEmployee(id)
    .then(response => redirection())
    .catch(error => console.log(error))
  }

  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.emailId}</td>
      <td>
        <NavLink className="btn btn-info m-1" to={`/update-employee/${employee.id}`}>Update</NavLink>

        <button className="btn btn-danger m-1" onClick = {() => deleteEmployee(employee.id)}>Delete</button>

        <NavLink className="btn btn-info m-1" to={`/employee/${employee.id}`}>View</NavLink>
      </td>
    </tr>
  )
}

export default DisplayEmployee;