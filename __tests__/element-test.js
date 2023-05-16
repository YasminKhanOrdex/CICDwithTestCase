import React from 'react';
import renderer from 'react-test-renderer';
import Element from '../Element';

const findElement = (tree, element) => {
  console.log(tree.children);
  let result = undefined;
  for (node in tree.children) {
    if (tree.children[node].props.testID == element) {
      result = true;
    }
  }
  return result;
};
it('Find Elemnet', () => {
  const tree = renderer.create(<Element />).toJSON();
  expect(findElement(tree, 'username')).toBeDefined();
});
