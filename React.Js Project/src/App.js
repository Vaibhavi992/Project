import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Mediplus_lite Webpage/Pages/Home';
import About from './Mediplus_lite Webpage/Pages/About';
import Product from './Mediplus_lite Webpage/Pages/Product';
import Services from './Mediplus_lite Webpage/Pages/Services';
import Gallery from './Mediplus_lite Webpage/Pages/Gallery';
import Contact from './Mediplus_lite Webpage/Pages/Contact';
import AHeader from './Admin_login Pages/Component/AHeader';
import Dashboard from './Admin_login Pages/Pages/Dashboard';
import Adminlogin from './Admin_login Pages/Pages/Adminlogin';
import Add_product from './Admin_login Pages/Pages/Add_product';
import Manage_product from './Admin_login Pages/Pages/Manage_product';
import Add_services from './Admin_login Pages/Pages/Add_services';
import Manage_services from './Admin_login Pages/Pages/Manage_services';
import Manage_contact from './Admin_login Pages/Pages/Manage_contact';
import Manage_customer from './Admin_login Pages/Pages/Manage_customer';
import Login from './Mediplus_lite Webpage/Pages/Login';
import Signup from './Mediplus_lite Webpage/Pages/Signup';

import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aprofile from './Admin_login Pages/Pages/Aprofile';
import Profile from './Mediplus_lite Webpage/Pages/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="/creame" element={<Home/>}></Route>
          <Route path="/service" element={<Services/>}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/adminlogin" element={<Adminlogin/>}></Route>
          <Route path="/add_product" element={<Add_product/>}></Route>
          <Route path="/manage_product" element={<Manage_product/>}></Route>
          <Route path="/add_services" element={<Add_services/>}></Route>
          <Route path="/manage_services" element={<Manage_services/>}></Route>
          <Route path="/manage_contact" element={<Manage_contact/>}></Route>
          <Route path="/manage_customer" element={<Manage_customer/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='aprofile' element={<Aprofile/>}></Route>
          <Route path='profile' element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
