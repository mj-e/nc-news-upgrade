import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleComments from './ArticleComments';
import PropTypes from 'prop-types';
import firstLetterCapital from '../helpers/capitalize';
import * as actions from '../actions/actions';

class ArticlePage extends Component {
    constructor (props) {
        super(props);
    }
    componentDidMount () {
        this.props.fetchArticles(this.props.params.topic);
    }
    render () {
        if (this.props.loading) {
            return (
                <div>
                    <style>{css}</style>
                    <h4 className="loading">Loading...</h4>;
                </div>
            );
        }
        return (
            <div className="panel panel-default">
                <style>{css}</style>
                <div className="panel-body">
                    <h3 className="panel-heading">{this.props.article.title}</h3>
                    <p>{this.props.article.body}</p>
                    <p>Category - {firstLetterCapital(this.props.article.belongs_to)} | Comments - {this.props.article.comments}</p>
                </div>
                <div className="panel-footer">
                    <ArticleComments articleId={this.props.params.articleId} comments={this.props.comments} />
                </div>
            </div>
        );
    }
}

function mapStateToProps (state, props) {
    return {
        article: state.articles.byId[props.params.articleId],
        loading: (
            state.articles.loading
        )
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetchArticles: (topic) => {
            dispatch(actions.fetchArticles(topic));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);

ArticlePage.propTypes = {
    params: PropTypes.object.isRequired,
    article: PropTypes.object.isRequired,
    comments: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    fetchArticles: PropTypes.func.isRequired
}; 

const css = `
    .loading {
        color:  #0c2c84;
        text-align: center;
        font-family: Optima;
    }
    .panel-footer {
        background: #FFFFFF;
    }
    .panel-body {
        font-family: Optima;
        color:  #0c2c84;
        background: #F5F5F5;
    }
    .panel-heading {
        font-family: Optima;
        color:  #0c2c84;
        background: #F5F5F5;
    }
`;
