import React from "react";

export default class ExampleClass extends React.Component {
  constructor(){
    this.state = {
      saludo: 'Hola mundo React'
    }
  }
  render(){
    return (<h1> {this.state.saludo} </h1>)
  }
}