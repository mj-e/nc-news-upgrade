import React from 'react';
import ArticleCard from './ArticleCard';
import PropTypes from 'prop-types';

function ArticleList (props) {
    return (
        <div id="ArticleList">
            {props.articles.map(function (article, i) {
                return <ArticleCard
                    key={i}
                    {...article}
                    voteArticle={props.voteArticle.bind(null, article._id)}
                />;
            })}
        </div>
    );
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    voteArticle: PropTypes.func.isRequired
};

export default ArticleList;