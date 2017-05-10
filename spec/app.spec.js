import React from 'react';
import {App} from '../src/components/App.js';
import {expect} from 'chai';
import { render } from 'enzyme';

it('should render a H1 heading', () => {
    const wrapper = shallow(
        <h1> NC news upgrade with bootstrap </h1>
    );
    expect(wrapper).toMatchSnapshot();
});

it('should render a small label', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).to.have.text(' NC news upgrade with bootstrap ');
});

// import React from 'react'
// import {render} from 'enzyme'
// import {expect} from 'chai'

// import {Hello} from './hello'

// describe('Hello', () => {
//   it('should render text', () => {
//     const wrapper = render(<Hello />)

//     expect(wrapper).to.have.text('Hello world.')
//   })
// })

