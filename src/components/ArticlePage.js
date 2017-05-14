import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleComments from './ArticleComments';
import PropTypes from 'prop-types';
import firstLetterCapital from '../helpers/capitalize';


class ArticlePage extends Component {

    render () {
        if (this.props.loading) {
            return <p>Loading...</p>;
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

export default connect(mapStateToProps)(ArticlePage);

ArticlePage.propTypes = {
    articleId: PropTypes.string.isRequired,
    params: PropTypes.object.isRequired,
    votes: PropTypes.number.isRequired,
    belongs_to: PropTypes.string.isRequired,
    _id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    created_by: PropTypes.string.isRequired,
    article: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
    loading: PropTypes.boolean
}; 

const css = `
    .panel-heading {
        font-family: Optima;
        color:  #0c2c84;
        text-align: center;
    }
`;