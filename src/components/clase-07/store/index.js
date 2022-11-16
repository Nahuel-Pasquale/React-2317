import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension'

const store = configureStore({
  reducer,
  composeWithDevTools,
});

store.subscribe(() => console.log('cambio el estado'));

export default store;