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

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
