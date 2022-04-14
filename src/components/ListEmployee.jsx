import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const ListEmployee = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    
    EmployeeService.getAllEmployees()
    .then(response => {
      setEmployees(response.data);
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })

  }, []);
  

  return (
    <div className="container">
      <h2 className="text-center"> List Employees </h2>
      <NavLink to='/add-employee' className='btn btn-primary mb-2'>Add Employee</NavLink>
      <table className="table table-bordered table-striped">
        <thead>
          <th>Employee Id</th>
          <th>Employee First Name</th>
          <th>Employee Last Name</th>
          <th>Employee Email Id</th>
        </thead>
        <tbody>
          {
            employees.map(
              employee =>
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
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployee;