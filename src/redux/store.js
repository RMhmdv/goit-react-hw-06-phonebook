import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './reducers';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

export { store, persistor };
// export default store;

// ***Redux***

// import { createStore, combineReducers } from 'redux';
// import { combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// const store = createStore(rooReducer, composeWithDevTools());
// const rooReducer = combineReducers({contacts: contactsReducer});
