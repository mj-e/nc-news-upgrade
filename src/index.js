import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import '../public/bootstrap-3.3.7/css/bootstrap.min.css';

import App from './components/App';
import HomePage from './components/HomePage';
import ArticlePage from './components/ArticlePage';
import reducer from './reducer/index.reducer';

const store = createStore(reducer, applyMiddleware(thunk, createLogger()));

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={HomePage} />
                <Route path="/:topic" component={HomePage} />
                <Route path="/:topic/:articleId" component={ArticlePage} />
            </Route>
        </Router>
    </Provider>, document.getElementById('app'));
