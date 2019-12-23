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
                <p style={this.getStyle()}> 
                <input type="checkbox" onChange={this.props.markComplete.bind(this,this.props.todo.id)} /> {' '}
                {this.props.todo.title} 
                <button style={btnStyle} onClick={this.props.delTodo.bind(this,this.props.todo.id)}>x</button>
                </p>
        )
    }
}

const btnStyle ={
    color: 'White',
    backgroundColor: '#e80e0e',
    border: 'none',
    borderRadius:'50%',
    cursor: 'pointer',
    float: 'right',
    padding: '1px 6px',
    marginRight: '20px',
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
