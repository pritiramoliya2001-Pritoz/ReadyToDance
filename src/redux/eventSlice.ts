import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EventItem } from '../types/event';

interface EventState {
  events: EventItem[];
  loading: boolean;
}

const initialState: EventState = { events: [], loading: false };

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<EventItem[]>) => {
      state.events = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setEvents, setLoading } = eventSlice.actions;
export default eventSlice.reducer;