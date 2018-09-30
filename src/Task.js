import React, { Component } from 'react';
import logo from './logo.svg';
import App from './App';
import './App.css';

class Task extends React.Component {
    state = {
        title: '',
        description: '',
    }

          handleClick = event => {
              this.setState({
                title: this.props.titleFromParent,
                description: this.props.descriptionFromParent,
              })
      }

    render(){
        return (
               <div
                className="master"
               > 
                    <div
                    className = "app-result"
                    >
                        <button
                        type = "submit"
                        className = "btn"
                        onClick = {this.handleClick}
                        >
                        Submit
                        </button>
                        <div
                        className = "result-title"
                        >
                            Title: 
                            <br/>
                            {this.state.title}
                            
                        </div>
                        <div
                        className = "result-description"
                        >
                            Description:
                            <br/>
                            {this.state.description}

                        </div>

                    </div>
               </div> 
        );
    }
}

export default Task;