import React from 'react';
import { Link } from 'react-router';
import VoteButtons from './VoteButtons';

const ArticleCard = function (props) {
    return (
        <div className='well'>
            <style>{css}</style>
            <h4 className='h4'><Link to={`/${props.belongs_to}/${props._id}`} className='h4link'>{props.title}</Link></h4>
            <p>By {props.created_by} | Comments: {props.comments} | Category: {firstLetterCapital(props.belongs_to)}</p>
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
        background-color: #ffffd9;
    }
    .h4link{
        font-family: Optima;
        color: #0c2c84;
    }
    p{
        color: #0c2c84;
        font-family: Optima;
        font-style: italic;
    }`;

function firstLetterCapital(str) {
    return str.split(' ')
        .map(function (x) {
            return x.charAt(0).toUpperCase() + x.slice(1);
        }).join(' ');
}
