import React, { Component } from 'react'

export default class App extends Component {

  state = {
    a: 'hi'
  }

  render() {
    return (
      <div>
        <h1>{this.state.a}</h1>
      </div>
    )
  }
}
