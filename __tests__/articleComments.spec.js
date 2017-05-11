import React from 'react';
import { ArticleComments } from '../src/components/ArticleComments.js';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

test('renders div className="panel panel-default"', () => {
    var wrapper = shallow(<ArticleComments />);
    expect(wrapper.find(<div className="panel panel-default" />)).to.have.length(1);
});

describe('ArticleComments (Snapshot)', () => {
  it('renders article comments', () => {
    const component = renderer.create(<ArticleComments />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
