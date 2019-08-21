import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createHashHistory';
import App from './components/App';

import Jokes from './components/Jokes';
import './index.css';
import { resolve } from "path";

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact={true}  path='/' component={App}  />
            <Route path='/jokes' component={Jokes} />
        </Switch>
    </Router>,
    document.getElementById("root")
);


