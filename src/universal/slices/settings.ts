import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SettingsState {
  mode?: 'dark' | 'light';
}

const initialState: SettingsState = {
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateSettings(state, action: PayloadAction<Partial<SettingsState>>) {
      Object.assign(state, action.payload);
    },
    resetSettings() {
      return initialState;
    },
  },
});

export const {
  updateSettings,
  resetSettings,
} = settingsSlice.actions;

export default settingsSlice.reducer;