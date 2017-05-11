import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import CommentCard from './CommentCard';

export class ArticleComments extends Component {
    componentWillMount () {
        this.props.fetchComments(this.props.articleId);
    }
    render () {
        console.log(this.props.comments);

        return (
            <div className="panel panel-default">
                {this.props.comments.map(function (comment, i) {
                    return <CommentCard key={i} {...comment} />;
                })}
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        comments: state.comments.comments,
    };
}

function mapDispatchToProps (dispatch, props) {
    return {
        fetchComments: (id) => {
            dispatch(actions.fetchComments(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleComments);