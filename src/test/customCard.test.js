import React from 'react';
import renderer from 'react-test-renderer';
import ContactCard from '../components/contactCard';
import {Card} from 'react-native-paper';

describe('<CustomCard>', () => {
  it('<CustomCard> render correctly', () => {
    expect(renderer.create(<ContactCard />)).toMatchSnapshot();
  });

  it('render title correctly', () => {
    const data = {
      firstName: 'firstName',
      lastName: 'lastName',
      age: '100',
      photo: 'N/A',
    };

    const inst = renderer.create(<ContactCard />);
    const instCardTitle = inst.findByType(Card.Title);
    expect(instCardTitle.props.children).toEqual(data.firstName);
  });
});
