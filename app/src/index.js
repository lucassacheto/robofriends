import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import App from './App';
// import {robots} from './robots';
// import CardList from './CardList';
import "tachyons";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />,document.getElementById('card'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
