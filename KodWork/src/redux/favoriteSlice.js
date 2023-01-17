import {createSlice} from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favoriteJob: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      if (!state.favoriteJob.some(e => e.ID === action.payload.ID)) {
        state.favoriteJob.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favoriteJob = state.favoriteJob.filter(jobs => {
        return jobs.ID !== action.payload;
      });
    },
  },
});

export const {addFavorite, removeFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;
