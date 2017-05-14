import React from 'react';
import PropTypes from 'prop-types';

function VoteButtons (props) {
    return (
        <div >
            <style>{css}</style>
            <button type="button" className='btn btn-outline-secondary btn-sm btn-transparent' onClick={props.handleClick.bind(null, 'up')}><i className="glyphicon glyphicon-arrow-up"></i></button>
            <span><b> {props.votes} </b></span>

            <button type="button" className='btn btn-outline-secondary btn-sm btn-transparent' onClick={props.handleClick.bind(null, 'down')}><i className="glyphicon glyphicon-arrow-down"></i></button>
        </div>
    );
}

VoteButtons.propTypes = {
    votes: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default VoteButtons;

const css = `
    .btn-transparent {
    background: transparent;
    color: slategray;
    border: 1px solid #0c2c84;
    outline:none;
    }
    .btn:focus {
    outline: none;
    color: slategray;
    }
`;

