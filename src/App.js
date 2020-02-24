import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import Todolist from './Todolist';

class App extends Component {

  state = {
    input: "",
    todoList: []
  }

  additemHandler = (event) => {
    const value = event.target.value;
    console.log("value", value)
    console.log('dd')
    this.setState({ input: value  })
  }

   addinarrayHandler =(event)=>{
     console.log('addinarrayHandler=== ');
     
    this.setState((previousState) => {
      return {
        
        todoList: previousState.todoList.concat(previousState.input),
        input: "",
      }
    });
   }
   deleteHandler=(event,list)=>{
     console.log('abc = ', event, list);
    this.setState(prevState => ({
        todoList: prevState.todoList.filter(el=> el !== list )
    }));
}

  render() {
    console.log('STate = ', this.state.todoList);
    return (
      <div className="App">
        <Todo
          additem={this.additemHandler}
          additeminArray={this.addinarrayHandler}
          input ={this.input}
        />
        <Todolist 
          todolist = {this.state.todoList}
          deleteHandler ={this.deleteHandler}/>
      </div>
    );
  }
}

export default App;
