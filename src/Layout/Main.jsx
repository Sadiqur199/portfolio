import React from 'react';
import Navbar from '../Component/Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';

const Main = () => {
  return (
    <div className='ml-[100px] mr-[100px]'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;