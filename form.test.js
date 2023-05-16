// import React from 'react';
// import renderer from 'react-test-renderer';
// import Form from './form';
// import {render, fireEvent} from '@testing-library/react-native';

// test('Form renders correctly', () => {
//   const tree = renderer.create(<Form />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

// describe('Form', () => {
//   it('should submit form when button is pressed with valid data', () => {
//     const onSubmit = jest.fn();
//     const {getByTestId} = render(<Form onSubmit={onSubmit} />);
//     const input1 = getByTestId('username');
//     const input2 = getByTestId('password');
//     const button = getByTestId('submit-button');

//     fireEvent.changeText(input1, 'John');
//     fireEvent.changeText(input2, 'Doe');
//     fireEvent.press(button);

//     expect(onSubmit).toHaveBeenCalledWith({
//       username: 'John',
//       password: 'Doe',
//     });
//   });
//   it('should not submit form when button is pressed with invalid data', () => {
//     const onSubmit = jest.fn();
//     const {getByTestId} = render(<Form onSubmit={onSubmit} />);
//     const input1 = getByTestId('username');
//     const button = getByTestId('submit-button');

//     fireEvent.changeText(input1, '');
//     fireEvent.press(button);

//     expect(onSubmit).not.toHaveBeenCalled();
//   });
// });

// it('function and state test', () => {
//   const tree = renderer.create(<Form />).getInstance();
//   //   expect(tree.change(2)).toEqual(4);
//   //   tree.submit();
//   //   console.warn(submit());
//   expect(2).not.toBe('null');
//   //   expect(tree.state.data).toEqual(20);
// });
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Form from './form';

describe('Form', () => {
  it('should submit form when button is pressed with valid data', () => {
    const onSubmit = jest.fn();
    const {getByTestId} = render(<Form onSubmit={onSubmit} />);
    const input1 = getByTestId('input1');
    const input2 = getByTestId('input2');
    const button = getByTestId('submit-button');

    fireEvent.changeText(input1, 'John');
    fireEvent.changeText(input2, 'Doe');
    fireEvent.press(button);

    expect(onSubmit).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
    });
  });

  it('should not submit form when button is pressed with invalid data', () => {
    const onSubmit = jest.fn();
    const {getByTestId} = render(<Form onSubmit={onSubmit} />);
    const input1 = getByTestId('input1');
    const button = getByTestId('submit-button');

    fireEvent.changeText(input1, '');
    fireEvent.press(button);

    expect(onSubmit).not.toHaveBeenCalled();
  });
});
