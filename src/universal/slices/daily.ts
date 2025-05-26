import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Guess } from '../types/guess';

export interface DailyState {
    yesterday: string;
    guesses: Guess[];
    clues: string[];
}

const initialState: DailyState = {
    yesterday: '',
    guesses: [],
    clues: [],
};

const dailySlice = createSlice({
  name: 'daily',
  initialState,
  reducers: {
    setYesterday(state, action: PayloadAction<string>) {
      state.yesterday = action.payload;
    },
    setGuesses(state, action: PayloadAction<Guess[]>) {
      state.guesses = action.payload;
    },
    setClues(state, action: PayloadAction<string[]>) {
      state.clues = action.payload;
    },
    updateDaily(state, action: PayloadAction<Partial<DailyState>>) {
      Object.assign(state, action.payload);
    },
    resetDaily() {
      return initialState;
    },
  },
});

export const {
  setYesterday,
  setGuesses,
  setClues,
  setAnswer,
  updateDaily,
  resetDaily,
} = dailySlice.actions;

export default dailySlice.reducer;