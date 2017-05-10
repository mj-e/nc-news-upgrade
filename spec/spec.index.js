import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiJsx from 'chai-jsx';
// import {jsdom} from 'jsdom';
var jsdom = require('jsdom').jsdom;


chai.use(chaiEnzyme());
chai.use(chaiJsx);

global.document = jsdom('');
global.window = document.defaultView;
global.navigator = global.window.navigator;