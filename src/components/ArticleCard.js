import React from 'react';
import { Link } from 'react-router';
import VoteButtons from './VoteButtons';
import PropTypes from 'prop-types';
import firstLetterCapital from '../helpers/capitalize';

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
    voteArticle: PropTypes.func.isRequired,
    votes: PropTypes.number.isRequired,
    belongs_to: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    created_by: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired
};

export default ArticleCard;

const css = `
    .h4link{
        font-family: Optima;
        color: #0c2c84;
    }
    p{
        color: #0c2c84;
        font-family: Optima;
    }`;