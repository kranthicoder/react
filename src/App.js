import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      items : []
    }
  }
  filter(e){
    this.setState({filter:e.target.value})
  }
  componentWillMount(){
    fetch('https://swapi.co/api/people/?format=json').then(response => response.json())
    .then(({results:items})=>this.setState({items}))
  }
  render() {
    let items = this.state.items
    if(this.state.filter){
      items = items.filter(item=>item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    }
    return (
        <div>
        <input type="text" onChange={this.filter.bind(this)}/>
           <h1> Films </h1>
           {items.map(item=><Films update={item}/>)}
           <h1> Vehicles </h1>
           {items.map(item=><Vehicles update={item}/>)}
           <h1> Starships </h1>
           {items.map(item=><Starships update={item}/>)}
        </div>
    )
  }
}

const Films = (prop) =><h4>{prop.update.films}</h4>

const Vehicles = (prop) =><h4>{prop.update.vehicles}</h4>

const Starships = (prop) =><h4>{prop.update.starships}</h4>

export default App;