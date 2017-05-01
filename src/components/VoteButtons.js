import React from 'react';

function VoteButtons(props) {
    return (
        <div >
            <button type="button" className='btn btn-primary' onClick={props.handleClick.bind(null, 'up')}><i className="glyphicon glyphicon-arrow-up"></i></button>
            <span><b> {props.votes} </b></span>

            <button type="button" className='btn btn-primary' onClick={props.handleClick.bind(null, 'down')}><i className="glyphicon glyphicon-arrow-down"></i></button>
        </div>
    );
}

VoteButtons.propTypes = {
    votes: React.PropTypes.number.isRequired,
    handleClick: React.PropTypes.func.isRequired
};

export default VoteButtons;