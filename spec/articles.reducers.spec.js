import { expect } from 'chai';
import { reducer } from '../src/reducer/articles.reducer.js';
import * as actions from '../src/actions/actions.js';

describe('articles.reducer', () => {
    const initialState = {
        articles: [
            {
                _id: '591ae024a6159600047aac8e',
                title: 'What does Jose Mourinho\'s handwriting say about his personality?',
                body: 'Jose Mourinho was at The O2 on Sunday night to watch Dominic Thiem in action against Novak Djokovic. Thiem took the first set before Djokovic fought back to claim the victory, but Manchester United\'s manager was clearly impressed with the Austrian\'s performance.',
                created_by: 'tickle122',
                belongs_to: 'football',
                __v: 0,
                votes: 6,
                comments: 5
            }
        ],
        byId: {
            '591ae024a6159600047aac8e': {
                _id: '591ae024a6159600047aac8e',
                title: 'What does Jose Mourinho\'s handwriting say about his personality?',
                body: 'Jose Mourinho was at The O2 on Sunday night to watch Dominic Thiem in action against Novak Djokovic. Thiem took the first set before Djokovic fought back to claim the victory, but Manchester United\'s manager was clearly impressed with the Austrian\'s performance.',
                created_by: 'tickle122',
                belongs_to: 'football',
                __v: 0,
                votes: 6,
                comments: 5
            },
            loading: false,
            error: null
        }
    };

    it('returns state when not passed an action', () => {
        const newState = reducer(initialState);
        expect(newState).to.eql(initialState);
    });
});