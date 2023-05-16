import React from 'react';
import {FlatList, Text} from 'react-native';
import renderer from 'react-test-renderer';
import Function from '../Function';
it('function and state test', () => {
  const tree = renderer.create(<Function />).getInstance();
  //   expect(tree.change(2)).toEqual(4);
  tree.change(2);
  expect(tree.state.data).toEqual(20);
});

// it('state test', () => {
//   const tree = renderer.create(<Function />).getInstance();
//   expect(tree.state.data).toEqual(10);
// });
