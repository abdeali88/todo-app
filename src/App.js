import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/Header';
import AddComp from './components/AddComp';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
              todos:[]
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => this.setState({todos:response.data}))
    }

    markComplete = (id) => {
        this.setState({
            todos:this.state.todos.map(todo =>  {
                if(todo.id===id){
                    todo.completed=!todo.completed
                }
                return todo;
            })
        })
        }

    delTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => this.setState({
            todos:[...this.state.todos.filter((todo) => todo.id!==id)]
        })) 
    }

    addTodo = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos',{
            title: title,
            completed: false,
        })
        .then(response => this.setState({todos: [...this.state.todos, response.data]}) )
       
    }
    
    
    render() {
        return ( 
            <Router>
            <div className = "App">
                <Header/>

                <Route exact path="/" render={props => (
                    <>
                     <AddComp addTodo={this.addTodo} />
                     <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}  />
                     </>
                )} />

                <Route path="/about" render={props => (
                    <About />
                )} />
               
            </div>
            </Router>
        )
    }
}

export default App