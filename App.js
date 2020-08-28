import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

import AppNavigator from './src/navigator';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    </Provider>
  );
};

export default App;
