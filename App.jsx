import React, { Component } from 'react'
import './global.css';
export default class App extends Component {
constructor()
{
  super()
  this.state={
    count:0
  }
}
handleIncrement=()=>{
  this.setState({count:this.state.count+1})
}
handleDecrement=()=>{
  this.setState({count:this.state.count-1})
}
handleReset=()=>{
  this.setState({count:0})
}

  render() {
    return (
      <div className='MainBlock'>
     <h1>{this.state.count}</h1>
     <div className='btngroup'>
        <button onClick={this.handleIncrement}>+ increment</button>
        <button onClick={this.handleDecrement}>- decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
      </div>
    )
  }
}
