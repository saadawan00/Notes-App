import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Task from './Task';
import registerServiceWorker from './registerServiceWorker';


const element = (
    <div>
    <App/>
    </div>
    )




ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
