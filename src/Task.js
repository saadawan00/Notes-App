import React, { Component } from 'react';
import logo from './logo.svg';
import App from './App';
import './App.css';

class Task extends React.Component {

    render() {
        const { title, description } = this.props;

        return (
            <div
                className="master"
            >
                <div
                    className="app-result"
                >
                    <div
                        className="result-title"
                    >
                        Title:
                            <br />
                        {title}

                    </div>
                    <div
                        className="result-description"
                    >
                        Description:
                            <br />
                        {description}

                    </div>

                </div>
            </div>
        );
    }
}

export default Task;