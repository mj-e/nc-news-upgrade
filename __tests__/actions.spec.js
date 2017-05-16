import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../src/actions/actions.js';
import * as types from '../src/actions/types.js';
import nock from 'nock';
import expect from 'chai';
import { ROOT } from '../config';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates FETCH_ARTICLES_SUCCESS when fetching articles has been done', () => {
    nock(`${ROOT}`)
      .get('/articles')
      .reply(200, { body: { data: ['do something'] }});

    const expectedActions = [
      { type: types.FETCH_ARTICLES_REQUEST },
      { type: types.FETCH_ARTICLES_SUCCESS, body: { data: ['do something']  } }
    ];
    const store = mockStore({ data: [] });

    return store.dispatch(actions.fetchArticles())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});