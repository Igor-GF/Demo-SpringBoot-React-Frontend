import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListEmployee from './components/ListEmployee';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route path='/' element={<ListEmployee/>} />
            <Route path='/employees' element={<ListEmployee/>} />
            <Route path='/add-employee' element={<AddEmployeeComponent/>} />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
