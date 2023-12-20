// Install react-router-dom jika belum terinstall
// npm install react-router-dom

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faList, faUser, faBuilding, faPen, faBlog } from '@fortawesome/free-solid-svg-icons';
import '../assets/style/sidebarAdmin.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="form-body">
            <form className="form-background">
                {/* <div className="sidebarContainer">
                    <div className="sidebarItem">
                        <link to={'/'} >
                        <FontAwesomeIcon icon={faTachometerAlt} />
                        <span className="sidebarTitle">Dashboard</span>
                        </link>
                    </div>
                </div> */}
                {/* ... */}
                <div className="sidebarContainer">
                    <div className="sidebarItem">
                    <FontAwesomeIcon icon={faList} />
                        <Link to={'/admin_listpesanan'} style={{textDecoration:"none"}}>
                        <span className="sidebarTitle ">List Pesanan</span>
                        </Link>
                    </div>
                </div>
                {/* ... */}
                <div className="sidebarContainer">
                    <div className="sidebarItem">
                    <FontAwesomeIcon icon={faUser} />
                    <Link to={'/admin_listpelanggan'} style={{textDecoration:"none"}}>
                        
                        <span className="sidebarTitle">Pelanggan</span>
                    </Link>
                    </div>
                </div>
                {/* ... */}
                <div className="sidebarContainer">
                    <div className="sidebarItem">
                    <FontAwesomeIcon icon={faBuilding} />
                    <Link to={'/Admin_notaris'} style={{textDecoration:"none"}}>
                        
                        <span className="sidebarTitle">Notaris</span>
                    </Link>
                    </div>
                </div>
                {/* ... */}
                <div className="sidebarContainer">
                    <div className="sidebarItem">
                    <FontAwesomeIcon icon={faPen} />
                    <Link to={'/admintambahblog'} style={{textDecoration:"none"}}>
                        
                        <span className="sidebarTitle">Post Blog</span>
                    </Link>
                    </div>
                </div>
                {/* ... */}
                <div className="sidebarContainer">
                    <div className="sidebarItem">
                    <FontAwesomeIcon icon={faBlog} />
                    <Link to={'/Admin_listblog'} style={{textDecoration:"none"}}>
                        
                        <span className="sidebarTitle">Blog</span>
                    </Link>
                    </div>
                </div>
                {/* ... */}
            </form>
        </div>
    );
};

export default Sidebar;
