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
    <div className="container">
      <h2 className="text-center"> List Employees </h2>
      
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
              employee => <DisplayEmployee employee={employee} key={employee.id} redirection={getAllEmployees}/>
            )
          }
        </tbody>
      </table>

      <NavLink to='/add-employee' className='btn btn-primary mb-2'>Add Employee</NavLink>
    </div>
  )
}

export default ListEmployee;