import React from 'react';
import NavbarallAdmin from '../components/NavbarallAdmin';
import NavbarallAdmin2 from '../components/NavbarallAdmin2';


const Layout = ({ children }) => {
  return (
    <div className='min-h-screen bg-[#FFFFFF]'>
      <NavbarallAdmin2 />
      {children}
    </div>
  );
};

export default Layout;