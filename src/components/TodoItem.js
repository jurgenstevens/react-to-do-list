import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
  // this is the style for the items
  getStyle = () => {
    return {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }


  render() {
    // destructuring pulls the variables out of the todo in the props
    const { id, title } = this.props.todo;
    return (
        // inline styling uses double curly braces if you're defining the style there
        // if it's a variable then just one set of curly braces
        <div style={this.getStyle()}>
            <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                { title }
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
            </p>
        </div>
    )
  }
}
// PropTypes
// whatever the name of the class is, then propTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

// this is the style for the x button all the way to the right
const  btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

// or use this for the style of the item
// each to do item is the color light gray
// use camelCase no hyphens: backgroundColor
// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

export default TodoItem;