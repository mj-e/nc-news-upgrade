import React, { Component } from 'react';
import NavBar from './Navbar';
import * as actions from '../actions/actions';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <br />
                <br />
                <h1> NC news upgrade with bootstrap </h1>
                {this.props.children}
            </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchArticles: (topic) => {
      dispatch(actions.fetchArticles(topic));
    }
  };
}

export default connect(null, mapDispatchToProps)(App);
