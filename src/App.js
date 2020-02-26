import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import { v4 as uuid } from 'uuid';
import axios from 'axios';

class App extends Component {
  state={
    todos: []
  }

  // this will run after the component mounts and set the third party API json in the state
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => this.setState({ todos: res.data}))
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
    // this will make a delete request
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter
      (todo => todo.id !== id)] }));
  }

  // Add Todo
  addTodo = (title) => {
    //this will make the post request
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: 
      [...this.state.todos, res.data] }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} 
                       markComplete={this.markComplete} 
                       delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
