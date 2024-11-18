import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/appSlice';

export const store = configureStore({
  reducer: {
    // Your root reducer goes here
    counter: counterReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;