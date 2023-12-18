// Install react-router-dom jika belum terinstall
// npm install react-router-dom

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faList, faUser, faBuilding, faPen, faBlog } from '@fortawesome/free-solid-svg-icons';
import '../assets/style/sidebarAdmin.css';

const Sidebar = () => {
    return (
        <div className="form-body">
            <form className="form-background">
                <div className="sidebarContainer">
                    <div className="sidebarItem">
                        <FontAwesomeIcon icon={faTachometerAlt} />
                        <span className="sidebarTitle">Dashboard</span>
                    </div>
                </div>
                {/* ... */}
                <div className="sidebarContainer">
                    <div className="sidebarItem">
                        <FontAwesomeIcon icon={faList} />
                        <span className="sidebarTitle">List Pesanan</span>
                    </div>
                </div>
                {/* ... */}
                <div className="sidebarContainer">
                    <div className="sidebarItem">
                        <FontAwesomeIcon icon={faUser} />
                        <span className="sidebarTitle">Pelanggan</span>
                    </div>
                </div>
                {/* ... */}
                <div className="sidebarContainer">
                    <div className="sidebarItem">
                        <FontAwesomeIcon icon={faBuilding} />
                        <span className="sidebarTitle">Notaris</span>
                    </div>
                </div>
                {/* ... */}
                <div className="sidebarContainer">
                    <div className="sidebarItem">
                        <FontAwesomeIcon icon={faPen} />
                        <span className="sidebarTitle">Post Blog</span>
                    </div>
                </div>
                {/* ... */}
                <div className="sidebarContainer">
                    <div className="sidebarItem">
                        <FontAwesomeIcon icon={faBlog} />
                        <span className="sidebarTitle">Blog</span>
                    </div>
                </div>
                {/* ... */}
            </form>
        </div>
    );
};

export default Sidebar;
