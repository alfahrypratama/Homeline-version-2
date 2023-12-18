import React from 'react';
import NavbarallAdmin from '../components/NavbarallAdmin';


const Layout = ({ children }) => {
  return (
    <div className='min-h-screen bg-[#FFFFFF]'>
      <NavbarallAdmin />
      {children}
    </div>
  );
};

export default Layout;