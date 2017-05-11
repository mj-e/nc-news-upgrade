import * as types from '../actions/types';

const initialState = {
  comments: [],
  loading: false,
  error: null
};

function commentsReducer (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_COMMENTS_REQUEST:
      return Object.assign({}, prevState, {
        loading: true,
        error: null
      });
    case types.FETCH_COMMENTS_SUCCESS:
      return Object.assign({}, prevState, {
        loading: false,
        comments: action.data
      });
    case types.FETCH_COMMENTS_ERROR:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.error
      });
    default:
      return prevState;
  }
}

export default commentsReducer;