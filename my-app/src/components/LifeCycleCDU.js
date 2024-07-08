import React, { Component } from 'react'
import LifeCycleCDUChild from './LifeCycleCDUChild'

export class LifeCycleCDU extends Component {

    constructor(props) {
      console.log('constructor called')
      super(props)
      this.state = {
         greeting: 'Hello',
      }
    }

    updateGreeting = () => {
        console.log('Update greeting called')
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === 'Hello' ? 'Goodbye': 'Hello!'
            }
        })
    }

    componentDidUpdate(){
        console.log('Component updated')
    }
  
    
  render() {
    console.log('Render method called')
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.updateGreeting}>Update Greeting</button>
        <LifeCycleCDUChild parentGreeting={this.state.greeting} />
      </div>
    )
  }
}

export default LifeCycleCDU