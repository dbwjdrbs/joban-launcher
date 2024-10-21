import { configureStore } from '@reduxjs/toolkit';
import windowReducer from './reducers';

const store = configureStore({
  reducer: {
    window: windowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
