import React, { Component } from 'react';
import * as actions from '../actions/actions';
import { getTopArticles } from '../reducer/articles.reducer';
import { connect } from 'react-redux';
import ArticleList from './ArticleList';

class HomePage extends Component {
    componentDidMount () {
        this.props.fetchArticles(this.props.params.topic);
    }
    componentWillReceiveProps (nextProps) {
        if (nextProps.params.topic !== this.props.params.topic) {
            this.props.fetchArticles(nextProps.params.topic);
        }
    }
    render () {
        console.log('render');
        return (
            <div id='HomePage'>
                <ArticleList articles={this.props.articles} voteArticle={this.props.voteArticle} />
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        articles: getTopArticles(state, 10)
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetchArticles: (topic) => {
            dispatch(actions.fetchArticles(topic));
        },
        voteArticle: (id, vote) => {
            dispatch(actions.voteArticle(id, vote));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

HomePage.propTypes = {
    articleId: React.PropTypes.number.isRequired,
    params: React.PropTypes.number.isRequired,
    fetchArticles: React.PropTypes.func.isRequired,
    voteArticle: React.PropTypes.number.isRequired,
    articles: React.PropTypes.string.isRequired
}; 