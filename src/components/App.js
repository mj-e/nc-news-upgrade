import React, { Component } from 'react';
import NavBar from './Navbar';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends Component {
    render () {
        return (
            <div className="fullPage">
                <style>{css}</style>
                <NavBar />
                <br />
                <br />
                <h1> Northcoders News </h1>
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

App.propTypes = {
     children: PropTypes.element.isRequired
};

const css = ` 
    h1{
    color:  #0c2c84;
    text-align: center;
    font-family: Optima;
    }   
`;