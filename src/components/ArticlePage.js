import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleComments from './ArticleComments';


class ArticlePage extends Component {
    componentDidMount () {

    }
    render () {
        console.log(this.props.params.articleId);
        if (this.props.loading) {
            return <p>Loading...</p>;
        }
        return (
            <div className="panel panel-default">
                <h3 className="panel-heading">{this.props.article.title}</h3>
                <div className="panel-body"><p>{this.props.article.body}</p>
                    <p>Category - {this.props.article.belongs_to} | Comments - {this.props.article.comments}</p>
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
    articleId: React.PropTypes.number.isRequired,
    votes: React.PropTypes.number.isRequired,
    belongs_to: React.PropTypes.string.isRequired,
    _id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
    created_by: React.PropTypes.string.isRequired,
    comments: React.PropTypes.string.isRequired,
    loading: React.PropTypes.string.isRequired
}; 