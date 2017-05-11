import React, { Component } from 'react';
import NavBar from './Navbar';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

class App extends Component {
    render () {
        return (
            <div className="fullPage">
                <style>{css}</style>
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


const css = ` 
    .fullPage{
    background-color: #c7e9b4;
    }
    h1{
    color:  #0c2c84;
    }   
`;

App.propTypes = {
     children: React.PropTypes.element.isRequired
};