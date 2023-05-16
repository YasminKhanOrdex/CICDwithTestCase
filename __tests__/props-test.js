import React from 'react';
import renderer from 'react-test-renderer';
import Profile from '../Profile';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
import {shallow} from 'enzyme';

it('testing props', () => {
  const wrapper = shallow(<Profile data="Hello" />).props();
  console.warn(wrapper);
  expect(wrapper.children.props.children).toBe('Hello');
});
