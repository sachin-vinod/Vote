import React, { Component } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    return ( 
        <div>
                <nav class="navbar bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            Navbar
                        </a>
                        
                        <button onClick={() => navigate("/Result")}>Result</button>
                        <button onClick={() => navigate("/")}>Home</button>
                    </div>
                </nav>
            </div>
     );
}

export default NavBar;