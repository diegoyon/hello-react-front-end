import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetings/greetingsSlice';

export const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});
