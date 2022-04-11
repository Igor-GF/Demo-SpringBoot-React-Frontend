import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const AddEmployeeComponent = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();

   const saveEmployee = (e) => {
     e.preventDefault();
     const employee = { firstName, lastName, emailId };

     EmployeeService.createEmployee(employee)
     .then(response => {
        console.log(response.data);
        navigate('/employees');
     })
     .catch((error) => console.log(error))
   }

  return (
    <div>
      <div className='card col-6 offset-md-3 mt-4'>
        <h2 className='text-center'>Add Employee</h2>
        <div className='card-body'>
          <form>
            <div className='form-grout mb-2'>
              <label className='form-label'>First Name</label>
              <input 
                type="text" placeholder='Enter first name'
                name='firstname' className='form-control'
                value = {firstName}
                onChange = {(e) => setFirstName(e.target.value)} 
              />
            </div>

            <div className='form-grout mb-2'>
              <label className='form-label'>Last Name</label>
              <input 
                type="text" placeholder='Enter last name'
                name='lastname' className='form-control'
                value = {lastName}
                onChange = {(e) => setLastName(e.target.value)} 
              />
            </div>
 
            <div className='form-grout mb-2'>
              <label className='form-label'>Email Id</label>
              <input 
                type="email" placeholder='Enter your email address'
                name='emailId' className='form-control'
                value = {emailId}
                onChange = {(e) => setEmailId(e.target.value)} 
              />
            </div>

            <button className='btn btn-success' onClick={(e) => saveEmployee(e)}>Submit</button>

            <NavLink to='/employees' className='btn btn-danger'>Cancel</NavLink>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddEmployeeComponent;