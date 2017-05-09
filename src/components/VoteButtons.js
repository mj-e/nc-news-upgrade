import React from 'react';

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
    votes: React.PropTypes.number.isRequired,
    handleClick: React.PropTypes.func.isRequired
};

export default VoteButtons;

const css = `
    .btn-transparent {
    background: transparent;
    color: lightgray;
    -webkit-transition: background .2s ease-in-out, border .2s ease-in-out;
    -moz-transition: background .2s ease-in-out, border .2s ease-in-out;
    -o-transition: background .2s ease-in-out, border .2s ease-in-out;
    transition: background .2s ease-in-out, border .2s ease-in-out;
    border: 1px solid lightgray;
}

    .btn-transparent:hover {
        color: black;
        background-color: rgba(255,255,255,0.2);
    }
`;