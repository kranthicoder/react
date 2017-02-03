import React from 'react';

class App extends React.Component{
  render(){
    return(
      <Parent>
        <div className="sample1"></div>
        <div className="sample2"></div>
      </Parent>
    )
  }
}

class Parent extends React.Component{
  render(){
    // console.log('actual child',this.props.children)
    // let items = this.props.children.map(child=>child)
    // let items = React.Children.map(this.props.children,child=>child)
    // let items = React.Children.toArray(this.props.children)
    let items = React.Children.forEach(this.props.children,child=>console.log(child.props.className))
    // let items = React.Children.only(this.props.children)
    console.log('mapped child',items)
    return null
  }
}

export default App;