import React, { Component } from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox';
//import { robots } from './robots'

class App extends Component {

  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
  
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( res => res.json())
      .then( names => this.setState({ robots: names }))
      
  }

  render() {
    
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    //if(this.state.robots.length === 0){
    if(!this.state.robots.length){
      return <h1 className="tc">loading</h1>
    }else {
      return(
        <div className="tc mt4">
          <h1 className="f1">ROBOFRIENDS</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      )
    }

    
  }

}

export default App;
