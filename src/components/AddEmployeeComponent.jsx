import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const AddEmployeeComponent = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    
    const employee = { firstName, lastName, emailId };

    if(id) {

      EmployeeService.updateEmployeeById(id, employee)
      .then(response => navigate('/employees'))
      .catch((error) => console.log(error))

    } else {

      EmployeeService.createEmployee(employee)
      .then(response => navigate('/employees'))
      .catch((error) => console.log(error))
    }
  }

  useEffect(() => {
    
  EmployeeService.getEmployeeById(id)
  .then(response => {
    setFirstName(response.data.firstName);
    setLastName(response.data.lastName);
    setEmailId(response.data.emailId);
  })
  .catch(error => console.log(error))

  }, [])
   
  const formTitle = () => {

    if(id) { 
      return <h2 className='text-center'>Update Employee</h2>; 
    } else {
      return <h2 className='text-center'>Add Employee</h2>;
    }
  }

  return (
    <div>
      <div className='card col-6 offset-md-3 mt-4'>
        {
          formTitle()
        }
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

            <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>

            <NavLink to='/employees' className='btn btn-danger'>Cancel</NavLink>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddEmployeeComponent;