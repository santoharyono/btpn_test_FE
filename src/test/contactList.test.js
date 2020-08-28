import React from 'react';
import renderer from 'react-test-renderer';
import ContactList from '../screens/ContactList';

describe('<ContactList>', () => {
  it('<CustomHeader> render correctly', () => {
    expect(renderer.create(<ContactList />)).toMatchSnapshot();
  });
});
