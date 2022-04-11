import React from 'react';
import { useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { DarkTheme } from './api/theme';
import MainStacks from './navigation/stacks';
import store from './redux/store';

export const persistor = persistStore(store);

const App = () => {
  const isDarkMode = useColorScheme() !== 'dark';

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
          <MainStacks />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
