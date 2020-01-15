import React, { Component } from 'react'
import uuid from "uuid/v4";
import './NewTodoForm.css'


class NewTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
       item : "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(evt) {
    this.setState(
      {[evt.target.name]:evt.target.value}
    )
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const newTodo = {...this.state, id: uuid(), completed: false}
    this.props.createTodo(newTodo)
    this.setState({
      item : "",
    })
  }
  
  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="item">New Todo</label>
        <input 
        type="text" 
        name="item"
        placeholder="new todo"
        value={this.state.item}
        onChange={this.handleChange}
        id="todoItem"
        />
        <button>Add Todo!</button>
      </form>
    )
  }
}

export default NewTodoForm