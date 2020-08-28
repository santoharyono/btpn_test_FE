import React from 'react';
import {Appbar} from 'react-native-paper';
const CustomHeader = ({title, shouldBack = false, onBackPress}) => {
  return (
    <Appbar.Header>
      {shouldBack ? <Appbar.BackAction onPress={onBackPress} /> : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default CustomHeader;
