import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EventItem } from '../types/event';

interface FavoritesState { items: EventItem[]; }

const favouriteSlice = createSlice({
  name: 'favorites',
  initialState: { items: [] } as FavoritesState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<EventItem>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index >= 0) { state.items.splice(index, 1); } 
      else { state.items.push(action.payload); }
    },
  },
});

export const { toggleFavorite } = favouriteSlice.actions;
export default favouriteSlice.reducer;