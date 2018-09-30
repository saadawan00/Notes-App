import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './Task.js';

class App extends Component {

  state = {
    title: '',
    description: '',
    isSubmit: false,
  }

  handleChangeTitle = event => {
    this.setState({
      title: event.target.value
    })
  }

  handleChangeDescription = event => {
    this.setState({
      description: event.target.value
    })
  }

  handleClick = () => {
    this.setState({
      isSubmit: true
    })
  }



  render() {
    const { isSubmit } = this.state

    return (
      <div
        className="master"
      >
        <div
          className="app-quest"
        >
          <label
            className="app-label"
          >
            N O T E S
                </label>
          <p
            className="notes-title"
          >
            Add Notes
                </p>
          <p
            className="notes-title"
          >
            Title
                </p>
          <input
            className="input-box"
            onChange={(this.handleChangeTitle)}
          />
          <p
            className="notes-title"
          >
            Description
                </p>
          <input
            className="input-box"
            onChange={this.handleChangeDescription}
          />
          <br />

          <button
            type="submit"
            className="btn"
            onClick={this.handleClick}
          >
            Submit
          </button>

          {isSubmit && <Task
            title={this.state.title}
            description={this.state.description}
          />}
        </div>

      </div>

    );
  }
}

export default App;
