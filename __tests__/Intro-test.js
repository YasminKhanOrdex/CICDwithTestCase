import React from 'react';
import {FlatList, Text} from 'react-native';
import renderer from 'react-test-renderer';
import Intro from '../Intro';
test('renders correctly', () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the flatList Component ', () => {
  const tree = renderer
    .create(
      <FlatList
        data={['Item 1', 'Item-2', 'Item-3']}
        keyExtractor={item => item}
        renderItem={({item}) => <Text>{item}</Text>}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
