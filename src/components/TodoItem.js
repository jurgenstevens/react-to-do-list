import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
  render() {
    return (
        // inline styling uses double curly braces if you're defining the style there
        // if it's a variable then just one set of curly braces
        <div style={itemStyle}>
            <p>{ this.props.todo.title }</p>
        </div>
    )
  }
}
// PropTypes
// whatever the name of the class is, then propTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

// or use this for the style of the item
// each to do item is the color light gray
// use camelCase no hyphens: backgroundColor
const itemStyle = {
    backgroundColor: '#f4f4f4'
}

export default TodoItem;
