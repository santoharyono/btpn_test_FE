import React from 'react';
import renderer from 'react-test-renderer';
import CreateContact from '../screens/CreateContact';

describe('<CreateContact>', () => {
  it('<CreateContact> render correctly', () => {
    expect(renderer.create(<CreateContact />)).toMatchSnapshot();
  });
});
