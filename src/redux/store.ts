import { configureStore } from '@reduxjs/toolkit';
import eventReducer from './eventSlice';
import favoriteReducer from './favouriteSlice';

export const store = configureStore({
  reducer: {
    events: eventReducer,
    favorites: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;