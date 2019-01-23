import React, { Component } from 'react';
import './App.css';

const Cards = (props) => {

    return (
        <div className="card" style={{ "width": 18 }}>
            <div className="card-body">
                <h5 className="card-title">Method: </h5>
                <h6 className="card-subtitle mb-2 text-muted">Type: </h6>
                <p className="card-text">Description: </p>
                <a href="#" className="card-link">More information</a>
            </div>
        </div>
    )
}

export default Cards
