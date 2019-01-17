import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './action';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  add = () => {
    let todo = document.getElementById('todo').value;
    this.props.addTodo(todo);
  };

  render() {
    console.log('todos', this.props.todos);
    return (
      <div>
        <input type="text" id="todo" />
        <button onClick={this.add}> Add </button>

        {this.props.todos.map(todo => (
          <div> {todo} </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  {
    addTodo
  }
)(App);
