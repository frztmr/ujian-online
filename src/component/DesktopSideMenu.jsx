import React from "react";
import { RiDashboard2Fill } from 'react-icons/ri';



const DesktopSideMenu = () => {

    return (
        <div className="sidebar d-flex flex-column bg-light vh-100 p-3">
            <ul className="nav flex-column">
                <li className="nav-item mb-3">
                    <a href="#" className="nav-link d-flex align-items-center text-dark">
                        <RiDashboard2Fill size={24} className="me-2" />
                        Dashboard
                    </a>
                </li>
                {/* Add more menu items here */}
            </ul>
        </div>
    );
};

export default DesktopSideMenu;