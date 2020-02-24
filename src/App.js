import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {
  state={
    todos: [
      {
        id: 1,
        title: 'Take out the gahhhbage',
        completed: false 
      },
      {
        id: 2,
        title: 'Dinner with Dzenita',
        completed: false
      },
      {
        id: 3,
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
    console.log(id)
  }


  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} 
        delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
