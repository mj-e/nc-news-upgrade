import React from 'react';
import { Link } from 'react-router';
import VoteButtons from './VoteButtons';

const ArticleCard = function (props) {
    return (
            <div className='well'>
                <h2><Link to={`/${props.belongs_to}/${props._id}`} className='title is-3'>{props.title}</Link></h2>
                <p className='created_by'>Created by {props.created_by}</p>
                <p className='commentCount'>{props.comments} Comments</p>
                <p className='belongTo'>Category - {props.belongs_to}</p>
                <VoteButtons votes={props.votes} handleClick={props.voteArticle} />
            </div>
    );
};

ArticleCard.propTypes = {
    voteArticle: React.PropTypes.func.isRequired
};

export default ArticleCard;
