import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const EmployeeProfile = () => {

  const [employee, setEmployee] = useState({});
  const { id } = useParams();

  const getEmployee = (id) => {
    
    EmployeeService.getEmployeeById(id)
    .then(response => setEmployee(response.data))
    .catch(error => console.log(error))
  }

  useEffect(() => {

    getEmployee(id);
    console.log(employee);
  }, [])
  

  return (
    <div className='container'>
      <div className='card p-3 offset-m3'>
        <h4>Employee details</h4>
        <br />
        <h2>{employee.firstName} {employee.lastName}</h2>
        <p>Email: {employee.emailId}</p>
      </div>

      <NavLink className="btn btn-info m-1" to={`/employees`}>Back</NavLink>
    </div>
  )
}

export default EmployeeProfile;