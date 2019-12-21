import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    getStyle = () => { 
            return {
                margin: '0px',
                backgroundColor: '#f4f4f4',
                padding: '7px',
                borderBottom : '1px #ccc dashed',
                textDecoration: this.props.todo.completed ? 'line-through' : 'none'
            }
    }
    

    render() {
        return (
                <p style={this.getStyle()}> {this.props.todo.title} </p>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
