import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap'

const NextButton = (props) => {

    return (

        <Button className="next" bsStyle="primary" bsSize="medium" onClick={props.generateMethod}>
            Next
        </Button>
    )
}

export default NextButton