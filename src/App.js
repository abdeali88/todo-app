import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
              todos:[
                  {
                      id:1,
                      title:'Walk',
                      completed:true
                  },
                  {
                    id:2,
                    title:'Cadio',
                    completed:false
                },
                {
                    id:3,
                    title:'Run',
                    completed:false
                }
              ]
        }
    }
    
    render() {
        return ( 
            <div className = "App">
                <Todos todos={this.state.todos} />
            </div>
        )
    }
}

export default App