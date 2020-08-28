import React from 'react';
import renderer from 'react-test-renderer';
import CustomHeader from '../components/customHeader';
import {Appbar} from 'react-native-paper';

describe('<CustomHeader>', () => {
  it('<CustomHeader> render correctly', () => {
    expect(renderer.create(<CustomHeader />)).toMatchSnapshot();
  });

  it('render correct title', () => {
    const title = 'title header';
    const instance = renderer.create(<CustomHeader />);
    const appbarContentInstance = instance.findByType(Appbar.Content);
    expect(appbarContentInstance.props.children).toEqual(title);
  });

  it('render Appbar.BackAction when shouldBack equal true', () => {
    const shouldBack = true;
    const inst = renderer.create(<CustomHeader shouldBack={shouldBack} />);
    const instAppbarBackAction = inst.root.findByType(Appbar.BackAction);
    expect(instAppbarBackAction).toBeDefined();
  });
});
