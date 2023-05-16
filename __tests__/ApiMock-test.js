import React from 'react';
import renderer from 'react-test-renderer';
import User from '../ueser';

it('Api test case', async function () {
  global.fetch = jest.fn().mockImplementation(() => {
    let p = new Promise((resolve, reject) => {
      resolve({
        json: function () {
          return {Id: 1};
        },
      });
    });
    return p;
  });
  const response = await User.all();
  //   console.warn(response);
  expect(response.Id).toBe(1);
});
