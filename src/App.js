import React, { Component } from 'react';

class App extends Component {
 
  render() {
    
    return (
        <div>
          <Header />
          <Body />
          <Button />
          <Footer />           
        </div>
    )
  }
}

const Header = () => <h1> This is header </h1>

const Body = () => <p> This is body </p>

const Footer = () => <span> This is footer </span>

class Button extends Component{
  render() {
    return <button> Submit </button>
  }
}

export default App;