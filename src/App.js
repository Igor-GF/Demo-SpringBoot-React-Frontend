import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListEmployee from './components/ListEmployee';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import EmployeeProfile from './components/EmployeeProfile';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <main className='container'>
        <Routes>
          <Route path='/' element={<ListEmployee />} />
          <Route path='/employees' element={<ListEmployee />} />
          <Route path='/add-employee' element={<AddEmployeeComponent />} />
          <Route path='/update-employee/:id' element={<AddEmployeeComponent />} />
          <Route path='/employee/:id' element={<EmployeeProfile />} />
        </Routes>
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
