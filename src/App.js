import React, { Component } from 'react';
import Cards from './Cards';
import data from './data.json'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      methods: [],
      data: data
    }
  }


  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <div>JavaScript Study Card Deck</div>
        <Cards />
      </div>
    );
  }
}

export default App;
