import React, { Component } from 'react';
import Cards from './Cards';
import Toolbar from './Toolbar'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      methods: []
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3000')
    const json = await response.json()
    this.setState({ methods: json })
    this.generateMethod()
  }
  //ternary for card vs loading bc loading delay for backend

  getRandomIntInclusive = (max) => {
    const min = 0
    return Math.floor(Math.random() * (max - min)) + min
  }

  generateMethod = () => {
    console.log('gen method clicked')
    const randomIndex = this.getRandomIntInclusive(this.state.methods.length)
    const method = this.state.methods[randomIndex]
    console.log(method)
    this.setState({
      id: method.id,
      name: method.name,
      syntax: method.syntax,
      description: method.description,
      example: method.example,
      link: method.link
    })
  }




  render() {
    return (
      <div className="App">
        <div>JavaScript Methods Flashcards</div>
        <Toolbar />
        <Cards
          name={this.state.name}
          syntax={this.state.syntax}
          description={this.state.description}
          example={this.state.example}
          link={this.state.link}
          generateMethod={this.generateMethod} />
      </div>
    );
  }
}

export default App;
