import React from 'react';
import { Link } from 'react-router';
import VoteButtons from './VoteButtons';

const ArticleCard = function (props) {
    return (
        <div className='well'>
            <style>{css}</style>
            <h3 className='h3'><Link to={`/${props.belongs_to}/${props._id}`} className='title is-3'>{props.title}</Link></h3>
            <p>By {props.created_by} | Comments: {props.comments} | Category: {props.belongs_to}</p>
            <VoteButtons votes={props.votes} handleClick={props.voteArticle} />
        </div>
    );
};

ArticleCard.propTypes = {
    voteArticle: React.PropTypes.func.isRequired
};

export default ArticleCard;

const css = `
    .well {
        background-color: #edf8fb;
    }
    .h3{
        font-family: Aleo;
        color: #f03b20;
    }
    p{
        color: #54278f;
        font-family: serif;
        font-style: bold;
    }
    hr {
        color: black;
    }
`;