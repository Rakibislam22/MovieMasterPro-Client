import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayouts = () => {
    return (
        <div className='relative'>
            <div className='sticky top-0 z-999 backdrop-blur-sm'>
                <NavBar></NavBar>
            </div>
            
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default MainLayouts;