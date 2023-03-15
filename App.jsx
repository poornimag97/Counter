import React, { Component } from 'react'
export default class App extends Component{
 constructor()
 {
super()
this.state={
  username:"Manju",
  count:0
}
 }
 handleChange=()=>{
  this.setState({username:"Shree"})
 }
 handlenumberChange=()=>{
  this.setState({count:1})
 }
 render()
 {
  return(
    <div>
      <h1>{this.state.username}</h1>
      <h2>{this.state.count}</h2>
      <button onClick={this.handleChange}>click to change</button>
      <button onClick={this.handlenumberChange}> change the number</button>
    </div>
  )
 }
}
