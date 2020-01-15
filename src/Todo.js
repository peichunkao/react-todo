import React, { Component } from 'react'
import './Todo.css'
//import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      task: this.props.item
    }
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
  }

  handleRemove() {
    this.props.removeTodo(this.props.id)
  }

  handleUpdate(evt) {
    evt.preventDefault()
    this.props.updateTodo(this.props.id, this.state.task)
    this.setState({
      isEditing: false
    })
  }

  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  handleChange(evt) {
    this.setState(
      {[evt.target.name]:evt.target.value}
    )
  }

  handleToggle(evt) {
    this.props.toggleCompleted(this.props.id)
  }

  render() {
    let result
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
            <input 
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}>
            </input>
            <button>Save!</button>
          </form>
        </div>
      )
    } else {
      result = (
        <div className="Todo">
          <li 
            className={ this.props.completed? "Todo-task completed" : "Todo-task"}
            onClick={this.handleToggle}
          >
            {this.props.item}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.toggleForm}><i className='fas fa-pen' /></button>
            <button onClick={this.handleRemove}><i className='fas fa-trash' /></button>
          </div>
        </div>
      )
    }
    return (
      <div>{result}</div>
      
    )
  }
}

export default Todo