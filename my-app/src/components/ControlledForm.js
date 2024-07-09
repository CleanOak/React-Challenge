import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         category: 'website',
         comments: ''
      }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleQueryCategory = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

  render() {
    return (
      
        <form onSubmit={this.handleSubmit}>
            <div>
            <label htmlFor='id-name'>Your Name:</label>
            <input 
                value={this.state.name} 
                onChange={this.handleNameChange}
                id='id-name' 
                name='name' 
                type='text' />
            </div>
            <div>
            <label htmlFor='id-category'>Query Category:</label>
            <select 
                id='id-category'
                name='category'
                value={this.state.category}
                onChange={this.handleQueryCategory}
            >
                <option value='website'>Website Issue</option>
                <option value='order'>Order Issue</option>
                <option value='general'>General Inquiry</option>
            </select>
            </div>
            <div>
            <label htmlFor='id-comments'>Comments:</label> 
            <textarea 
                id='id-comments' 
                name='comments'
                value={this.state.comments}
                onChange={this.handleCommentChange}
                />
            </div>
            <input type='submit' value='Submit'/>
            
        </form>
     
    )
  }
}

export default ControlledForm