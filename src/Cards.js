import React from 'react';
import './App.css';
import AnswerButton from './AnswerButton';
import NextButton from './NextButton'

const Cards = (props) => {
    console.log(props)
    return (

        <div className="row">
            <div className="card" style={{ "width": 500 }}>
                <div className="card-body">
                    <h5 className="card-title">Method: {props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Syntax: {props.syntax}</h6>
                    <p className="card-text">Description: {props.description}</p>
                    <p className="card-text">Example: {props.example}</p>

                    <div className="container justify-content-center d-flex flex-column">
                        <AnswerButton />
                        <NextButton
                            generateMethod={props.generateMethod} />
                        <a href={props.link} className="card-link">More information</a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
