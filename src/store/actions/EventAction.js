import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [
    {
      id: 0,
      title: "Event 1",
      start: new Date(2022, 1, 0, 16, 0, 0),
      end: new Date(2022, 1, 0, 17, 0, 0),
    },
    {
      id: 1,
      title: "Event 2",
      start: new Date(2022, 1, 2, 9, 30, 0),
      end: new Date(2022, 1, 2, 10, 0, 0),
    },
    {
      id: 2,
      title: "Event 3",
      start: new Date(2022, 1, 13, 9, 15, 0),
      end: new Date(2022, 1, 13, 10, 15, 0),
    },
    {
      id: 3,
      title: "Event 4",
      start: new Date(2022, 1, 13, 13, 0, 0),
      end: new Date(2022, 1, 13, 14, 0, 0),
    },
    {
      id: 4,
      title: "Event 5",
      start: new Date(2022, 1, 14, 14, 0, 0),
      end: new Date(2022, 1, 14, 17, 0, 0),
    },
    {
      id: 5,
      title: "Event 6",
      start: new Date(2022, 1, 15, 14, 0, 0),
      end: new Date(2022, 1, 15, 18, 0, 0),
    },
    {
      id: 6,
      title: "Event 7",
      start: new Date(2022, 1, 16, 10, 30, 0),
      end: new Date(2022, 1, 16, 12, 0, 0),
    },
    {
      id: 7,
      title: "Event 8",
      start: new Date(2022, 1, 16, 14, 0, 0),
      end: new Date(2022, 1, 16, 15, 0, 0),
    },
    {
      id: 8,
      title: "Event 9",
      start: new Date(2022, 1, 17, 10, 0, 0),
      end: new Date(2022, 1, 17, 12, 0, 0),
    },
    {
      id: 9,
      title: "Event 10",
      start: new Date(2022, 1, 18, 9, 0, 0),
      end: new Date(2022, 1, 18, 12, 0, 0),
    },
    {
      id: 10,
      title: "Event 11",
      start: new Date(2022, 1, 18, 21, 0, 0),
      end: new Date(2022, 1, 18, 22, 0, 0),
    },
    {
      id: 11,
      title: "Event 12",
      start: new Date(2022, 1, 18, 14, 0, 0),
      end: new Date(2022, 1, 18, 13, 0, 0),
    },
    {
      id: 12,
      title: "Event 13",
      start: new Date(2022, 1, 18, 18, 0, 0),
      end: new Date(2022, 1, 18, 18, 30, 0),
    },
    {
      id: 13,
      title: "Event 14",
      start: new Date(2022, 1, 18, 23, 0, 0),
      end: new Date(2022, 1, 18, 23, 59, 0),
    },
    {
      id: 14,
      title: "Event 15",
      start: new Date(2022, 1, 19, 10, 0, 0),
      end: new Date(2022, 1, 19, 12, 0, 0),
    },
    {
      id: 15,
      title: "Event 16",
      start: new Date(2022, 1, 19, 16, 0, 0),
      end: new Date(2022, 1, 19, 18, 0, 0),
    },
  ],
};

const eventSlice = createSlice({
  name: "events",
  initialState: initialState,
  reducers: {
    eventDrop(state, action) {
      const { event, start, end } = action.payload;
      const idx = state.events.findIndex((e) => e.id === event.id);

      const updatedEvent = { ...event, start, end };

      const nextEvents = [...state.events];
      nextEvents.splice(idx, 1, updatedEvent);

      state.events = [...nextEvents];
    },
    addEvent(state, action) {
      state.events = [...state.events, action.payload.newEvent];
    },
  },
});

export const eventActions = eventSlice.actions;
export default eventSlice.reducer;
