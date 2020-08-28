import React from 'react';
import renderer from 'react-test-renderer';
import DetailContact from '../screens/DetailContact';

describe('<DetailContact>', () => {
  it('<DetailContact> render correctly', () => {
    expect(renderer.create(<DetailContact />)).toMatchSnapshot();
  });
});
