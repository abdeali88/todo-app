import React, { Component } from 'react'

class AddComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: '',
        }
    }

    onChangeTodo = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({
            title: ''
        })

    }
    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input style={styleTextBox} name="title" onChange={this.onChangeTodo} value={this.state.title} placeholder=" Add todo..." type="text" />
                <button style={styleButton} type="submit">Add</button>
            </form>
        )
    }
}

const styleButton={
    backgroundColor: '#5a5e63',
    color: 'white',
    border:'0px',
    width: '10%',
    padding: '7px 0px',
    
}

const styleTextBox = {
    border:'0px',
    width: '90%',
    padding: '7px 0px',
  
}

export default AddComp
