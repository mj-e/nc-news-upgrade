import React from 'react';
import moment from 'moment';

const CommentCard = function (props) {
  return (
    <div className='panel panel-default'>
      <div className='panel-body'>
        <style>{css}</style>
        <p>{props.body}</p>
        <p>By {props.created_by} | Created: {moment(props.created_at).fromNow()}</p>
      </div>
    </div>
  );
};

export default CommentCard;

const css = `
    .panel-body {
        background-color: #ffffcc;
        font-family: Optima;
    }`;
