import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Guess, ClueType, Games } from '../types';

export interface DailyState {
  background: string;
  foregroundColor: string;
  borderColor: string;
  textColor: string;
  name: string;
  header: string;
  body: string;
  clueTypes: ClueType[];
  clues: string[];
  placeholder: string;
  guesses: Guess[];
  yesterdaysAnswer: string;
  games: Games[];
  lastFetchedDate?: string;
}

const initialState: DailyState = {
  background: '',
  foregroundColor: '',
  borderColor: '',
  textColor: '',
  name: '',
  header: '',
  body: '',
  clueTypes: [],
  clues: [],
  placeholder: '',
  guesses: [],
  yesterdaysAnswer: '',
  games: [],
  lastFetchedDate: undefined,
};

const dailySlice = createSlice({
  name: 'daily',
  initialState,
  reducers: {
    setBackground(state, action: PayloadAction<string>) {
      state.background = action.payload;
    },
    setForegroundColor(state, action: PayloadAction<string>) {
      state.foregroundColor = action.payload;
    },
    setBorderColor(state, action: PayloadAction<string>) {
      state.borderColor = action.payload;
    },
    setTextColor(state, action: PayloadAction<string>) {
      state.textColor = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setHeader(state, action: PayloadAction<string>) {
      state.header = action.payload;
    },
    setBody(state, action: PayloadAction<string>) {
      state.body = action.payload;
    },
    setClueTypes(state, action: PayloadAction<ClueType[]>) {
      state.clueTypes = action.payload;
    },
    setClues(state, action: PayloadAction<string[]>) {
      state.clues = action.payload;
    },
    setPlaceholder(state, action: PayloadAction<string>) {
      state.placeholder = action.payload;
    },
    setYesterdaysAnswer(state, action: PayloadAction<string>) {
      state.yesterdaysAnswer = action.payload;
    },
    setGuesses(state, action: PayloadAction<Guess[]>) {
      state.guesses = action.payload;
    },
    setGames(state, action: PayloadAction<Games[]>) {
      state.games = action.payload;
    },    
    setLastFetchedDate(state, action: PayloadAction<string>) {
      state.lastFetchedDate = action.payload;
    },
    refreshDaily(state, action: PayloadAction<DailyState>) {
      const incoming = action.payload;
      if (!state.background) state.background = incoming.background;
      if (!state.foregroundColor) state.foregroundColor = incoming.foregroundColor;
      if (!state.borderColor) state.borderColor = incoming.borderColor;
      if (!state.textColor) state.textColor = incoming.textColor;
      if (!state.name) state.name = incoming.name;
      if (!state.header) state.header = incoming.header;
      if (!state.body) state.body = incoming.body;
      if (!state.clueTypes.length) state.clueTypes = incoming.clueTypes;
      if (!state.placeholder) state.placeholder = incoming.placeholder;
      if (!state.yesterdaysAnswer) state.yesterdaysAnswer = incoming.yesterdaysAnswer;
      if (!state.games.length) state.games = incoming.games;
    },
    clearState(state) {
      Object.assign(state, initialState);
    },
    updateDaily(state, action: PayloadAction<Partial<DailyState>>) {
      Object.assign(state, action.payload);
    },
    resetDaily() {
      return initialState;
    },
  },
});

export const dailyActions = dailySlice.actions;
export default dailySlice.reducer;