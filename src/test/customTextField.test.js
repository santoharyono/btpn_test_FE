import React from 'react';
import renderer from 'react-test-renderer';
import CustomTextInput from '../components/customTextField';

describe('<CustomTextField>', () => {
  it('<CustomTextField> render correctly', () => {
    expect(renderer.create(<CustomTextInput />)).toMatchSnapshot();
  });
});
