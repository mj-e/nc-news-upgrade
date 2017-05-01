import React from 'react';

const CommentCard = function (props) {
  return (
    <div className='panel panel-default'>
      <p className='panel-body'> {props.body}</p>
    </div>
  );
};

export default CommentCard;
