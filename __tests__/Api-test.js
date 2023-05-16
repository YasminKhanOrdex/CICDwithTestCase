import React from 'react';
import renderer from 'react-test-renderer';
import User from '../ueser';
import 'isomorphic-fetch';
it('Api test case', async function () {
  const response = await User.all();
  console.warn(response.movies[2].title);
  console.log('response----------', response);

  expect(response.movies[2].title).toBe('The Matrix');

  // to check wether title is present or not and its type
  expect(response).toHaveProperty('title');
  expect(typeof response.title).toBe('string');

  // to check wether description is present or not and its type
  expect(response).toHaveProperty('description');
  expect(typeof response.description).toBe('string');

  // to check wether movies is present or not and its type
  expect(response).toHaveProperty('movies');
  expect(typeof response.movies).toBe('object');

  // to check wether id is present in movies object or not and its type
  expect(response.movies[0]).toHaveProperty('id');
  expect(typeof response.movies[0].id).toBe('string');

  // to check wether title is present in movies object or not and its type
  expect(response.movies[0]).toHaveProperty('title');
  expect(typeof response.movies[0].title).toBe('string');

  // to check wether releaseYear is present in movies object or not and its type
  expect(response.movies[0]).toHaveProperty('releaseYear');
  expect(typeof response.movies[0].releaseYear).toBe('string');
});
