import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import styles from './index.module.css';
import {routes} from './route.js';

global.windowHeight = window.innerHeight
                     || document.documentElement.clientHeight
                     || document.body.clientHeight;
global.windowWidth = window.innerWidth
                     || document.documentElement.clientWidth
                     || document.body.clientWidth;

let renderRoute = (item,index)=>{

    return(
        <Route key={index} exact path={item.url} component={item.component}/>
    );

};

ReactDOM.render(
    <div>
        <Router>
            <Switch>
                {routes.map(renderRoute)}
            </Switch>
        </Router>
    </div>
    , document.getElementById('root'));

