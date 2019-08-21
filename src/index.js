import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Header from './components/Header';

import Jokes from './components/Jokes';
import './index.css';
import { resolve } from "path";

// inline this since only using once.
//const history = createBrowserHistory();

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={() => <Header Component={App} /> } />
            <Route path='/jokes' render={() => <Header Component={Jokes} /> } />
        </Switch>
    </Router>,
    document.getElementById("root")
);


