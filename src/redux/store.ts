import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import AsyncStorage from '@react-native-async-storage/async-storage';

import reducer from './reducers';

const persistConfig = {
  key: 'reducer',
  storage: AsyncStorage,
  whitelist: ['reducer'],
};
const presistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  presistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
const persistor = persistStore(store);

export { persistor, store };
