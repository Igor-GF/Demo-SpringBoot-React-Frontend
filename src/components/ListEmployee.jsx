import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import DisplayEmployee from './DisplayEmployee';

const ListEmployee = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    
    getAllEmployees();

  }, []);

  const getAllEmployees = () => {

    EmployeeService.getAllEmployees()
    .then(response => {
      setEmployees(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="container list">
      <h2 className="text-center"> List Employees </h2>
      
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map(
              employee => <DisplayEmployee employee={employee} key={employee.id} redirection={getAllEmployees}/>
            )
          }
        </tbody>
      </table>

      <NavLink to='/add-employee' className='btn btn-info mb-2'>Add Employee</NavLink>
    </div>
  )
}

export default ListEmployee;