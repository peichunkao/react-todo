import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import './TodoList.css'

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoArr: []
    };
    this.createTodo = this.createTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  removeTodo(id) {
    this.setState({
      todoArr: this.state.todoArr.filter(todo => todo.id !== id)
    });
  }

  createTodo(newTodo) {
    this.setState({
      todoArr: [...this.state.todoArr, newTodo]
    });
  }

  updateTodo(id,newItem) {
    const newTodo = this.state.todoArr.map(item => {
      if(item.id === id) {
        return { ...item, item: newItem }
      } else {
        return item
      }
    })
    this.setState({
      todoArr: newTodo
    });
  }

  toggleComplete(id) {
    const newTodo = this.state.todoArr.map(item => {
      if(item.id === id) {
        return { ...item, completed: !item.completed }
      } else {
        return item
      }
    })
    this.setState({
      todoArr: newTodo
    });
  }

  renderTodo() {
    return (
      this.state.todoArr.map(todo => (
      <ul>
        <Todo
          key={todo.id}
          id={todo.id}
          item={todo.item}
          completed={todo.completed}
          removeTodo={this.removeTodo}
          updateTodo={this.updateTodo}
          toggleCompleted={this.toggleComplete}
        />
      </ul>
    )))
  }

  render() {
    return (
      <div className='TodoList'>
        <h1>
          React Todo List<span>A Simple React Todo App.</span>
        </h1>
        {this.renderTodo()}
        <NewTodoForm createTodo={this.createTodo} updateTodo/>
      </div>
    );
  }
}

export default TodoList;
