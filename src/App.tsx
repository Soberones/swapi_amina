import React from 'react';
import { ActivityIndicator, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { DarkTheme } from './api/theme';
import MainStacks from './navigation/stacks';
import { persistor, store } from './redux/store';

const App = () => {
  const isDarkMode = useColorScheme() !== 'dark';

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
          <MainStacks />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
