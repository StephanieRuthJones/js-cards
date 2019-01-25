import React from 'react';
import './App.css';

const Toolbar = (props) => {

    return (
        <div className="row justify-content-center">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-nav">
                    <ul className="nav">
                        <li className="nav-item mr-5">
                            <a className="nav-link active" href="#">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Toolbar