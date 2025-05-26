import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClueType } from '../types/clueType';
import { Games } from '../types/games';

export interface SettingsState {
  endpoint: string;
  title: string;
  header: string;
  body: string;
  clueTypes: ClueType[];
  placeholder: string;
  games: Games[];
  bgUrl: string;
  fgColor: string;
  borderColor: string;
  textColor: string;
}

const initialState: SettingsState = {
  endpoint: '',
  title: 'Blankdle',
  header: 'Its Blankdle!',
  body:'Change settings to select a game mode.',
  clueTypes: [{name: 'one', description: "Nothing..."}, {name: 'two', description: "Nothing..."}, {name: 'three', description: "Nothing..."}],
  placeholder: 'It does nothing!',
  games: [],
  bgUrl: '',
  fgColor: '#3d3d3d',
  borderColor: '#2b2b2b',
  textColor: '#d6d6d6',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setEndpoint(state, action: PayloadAction<string>) {
      state.endpoint = action.payload;
    },
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
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
    setPlaceholder(state, action: PayloadAction<string>) {
      state.placeholder = action.payload;
    },
    setGames(state, action: PayloadAction<Games[]>) {
      state.games = action.payload;
    },
    setBgUrl(state, action: PayloadAction<string>) {
      state.bgUrl = action.payload;
    },
    setFgColor(state, action: PayloadAction<string>) {
      state.fgColor = action.payload;
    },
    setBorderColor(state, action: PayloadAction<string>) {
      state.borderColor = action.payload;
    },
    setTextColor(state, action: PayloadAction<string>) {
      state.textColor = action.payload;
    },
    updateSettings(state, action: PayloadAction<Partial<SettingsState>>) {
      Object.assign(state, action.payload);
    },
    resetSettings() {
      return initialState;
    },
  },
});

export const {
  setEndpoint,
  setTitle,
  setHeader,
  setBody,
  setClueTypes,
  setPlaceholder,
  setGames,
  setBgUrl,
  setFgColor,
  setBorderColor,
  setTextColor,
  updateSettings,
  resetSettings,
} = settingsSlice.actions;

export default settingsSlice.reducer;