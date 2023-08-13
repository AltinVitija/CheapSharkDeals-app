import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import gamesReducer from './store/gamesSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['games'],
};

const persistedReducer = persistReducer(persistConfig, gamesReducer);

const store = configureStore({
  reducer: {
    games: persistedReducer,
  },
});

const persistor = persistStore(store);

export {store, persistor};
