import React from "react";

import { useNavigate } from "react-router-dom";

const Headerbar = () => {

    const navigate = useNavigate()

    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand text-white fw-bold" onClick={() => navigate('/')}>TemanBelajarKu</a>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Community</a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex">
                    <button className="btn btn-outline-light" onClick={() => navigate('/login')}>Login</button>
                </div>
            </div>
        </nav>
    )
}

export default Headerbar