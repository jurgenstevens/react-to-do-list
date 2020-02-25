import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { v4 as uuid } from 'uuid';

class App extends Component {
  state={
    todos: [
      {
        id: uuid(),
        title: 'Take out the gahhhbage',
        completed: false 
      },
      {
        id: uuid(),
        title: 'Dinner with Dzenita',
        completed: false
      },
      {
        id: uuid(),
        title: 'Meeting with Chels',
        completed: false
      }
    ]
  }

  // since using destructuring in TodoItem.js, we can now grab the id from whatever is checked
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        // it can't be equal to true or false bc it'd always be set as that boolean
        // it has to be the opposite of the current boolean ergo !todo.completed
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete the Todo
  delTodo = (id) => {
    // this will return everything in the state with the spread operator
    // and then filter out the id that was clicked on to be deleted
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Todos todos={this.state.todos} markComplete={this.markComplete} 
          delTodo={this.delTodo} />
          <AddTodo addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
