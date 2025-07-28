import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Guess, ClueType, Games } from '../types';

export interface DailyState {
  background: string;
  
  logoTextColor?: string;
  logoFontFamily?: string;

  modalBackgroundColor?: string;
  modalBorderColor?: string;
  modalBorderWidth?: string;
  modalBorderRadius?: string;
  modalFontFamily?: string;
  modalTextColor?: string;

  infoBackgroundColor?: string;
  infoBorderColor?: string;
  infoBorderWidth?: string;
  infoBorderRadius?: string;
  infoFontFamily?: string;
  infoTextColor?: string;

  inputBackgroundColor?: string;
  inputBorderColor?: string;
  inputBorderWidth?: string;
  inputBorderRadius?: string;
  inputFontFamily?: string;
  inputTextColor?: string;

  tableFontFamily?: string;
  tableTextColor?: string;

  tileBorderColor?: string;
  tileBorderWidth?: string;
  tileBorderRadius?: string;
  tileColorCorrect?: string;
  tileColorIncorrect?: string;
  tileColorPartial?: string;
  tileColorDefault?: string;
  tileFontFamily?: string;
  tileTextCorrect?: string;
  tileTextInCorrect?: string;
  tileTextPartial?: string;
  tileTextDefault?: string;

  yesterdayBackgroundColor?: string;
  yesterdayBorderColor?: string;
  yesterdayBorderWidth?: string;
  yesterdayBorderRadius?: string;
  yesterdayFontFamily?: string;
  yesterdayTextColor?: string;
  yesterdayItemFontFamily?: string;
  yesterdayItemTextColor?: string;

  keyBackgroundColor?: string;
  keyBorderColor?: string;
  keyBorderWidth?: string;
  keyBorderRadius?: string;
  keyFontFamily?: string;
  keyTextColor?: string;

  atlasBackgroundColor?: string;
  atlasBorderColor?: string;
  atlasBorderWidth?: string;
  atlasBorderRadius?: string;
  atlasFontFamily?: string;
  atlasTextColor?: string;

  footerTextColor?: string;
  footerFontFamily?: string;

  name: string;
  header: string;
  body: string;
  clueTypes: ClueType[];
  clues: string[];
  placeholder: string;
  attributes: string[];
  guesses: Guess[];
  yesterdaysAnswer: string;
  games: Games[];
  lastFetchedDate?: string;
}

const initialState: DailyState = {
  background: '',

  logoTextColor: '',
  logoFontFamily: '',

  modalBackgroundColor: '',
  modalBorderColor: '',
  modalBorderWidth: '',
  modalBorderRadius: '',
  modalFontFamily: '',
  modalTextColor: '',

  infoBackgroundColor: '',
  infoBorderColor: '',
  infoBorderWidth: '',
  infoBorderRadius: '',
  infoFontFamily: '',
  infoTextColor: '',

  inputBackgroundColor: '',
  inputBorderColor: '',
  inputBorderWidth: '',
  inputBorderRadius: '',
  inputFontFamily: '',
  inputTextColor: '',

  tableFontFamily: '',
  tableTextColor: '',

  tileBorderColor: '',
  tileBorderWidth: '',
  tileBorderRadius: '',
  tileColorCorrect: '',
  tileColorIncorrect: '',
  tileColorPartial: '',
  tileColorDefault: '',
  tileFontFamily: '',
  tileTextCorrect: '',
  tileTextInCorrect: '',
  tileTextPartial: '',
  tileTextDefault: '',

  yesterdayBackgroundColor: '',
  yesterdayBorderColor: '',
  yesterdayBorderWidth: '',
  yesterdayBorderRadius: '',
  yesterdayFontFamily: '',
  yesterdayTextColor: '',
  yesterdayItemFontFamily: '',
  yesterdayItemTextColor: '',

  keyBackgroundColor: '',
  keyBorderColor: '',
  keyBorderWidth: '',
  keyBorderRadius: '',
  keyFontFamily: '',
  keyTextColor: '',

  atlasBackgroundColor: '',
  atlasBorderColor: '',
  atlasBorderWidth: '',
  atlasBorderRadius: '',
  atlasFontFamily: '',
  atlasTextColor: '',

  footerTextColor: '',
  footerFontFamily: '',

  name: '',
  header: '',
  body: '',
  clueTypes: [],
  clues: [],
  placeholder: '',
  attributes: [],
  guesses: [],
  yesterdaysAnswer: '',
  games: [],
  lastFetchedDate: undefined,
};

const dailySlice = createSlice({
  name: 'daily',
  initialState,
  reducers: {
    setBackground(state, action: PayloadAction<string>) { state.background = action.payload; },

    setLogoTextColor(state, action: PayloadAction<string>) { state.logoTextColor = action.payload; },
    setLogoFontFamily(state, action: PayloadAction<string>) { state.logoFontFamily = action.payload; },

    setModalBackgroundColor(state, action: PayloadAction<string>) { state.modalBackgroundColor = action.payload; },
    setModalBorderColor(state, action: PayloadAction<string>) { state.modalBorderColor = action.payload; },
    setModalBorderWidth(state, action: PayloadAction<string>) { state.modalBorderWidth = action.payload; },
    setModalBorderRadius(state, action: PayloadAction<string>) { state.modalBorderRadius = action.payload; },
    setModalFontFamily(state, action: PayloadAction<string>) { state.modalFontFamily = action.payload; },
    setModalTextColor(state, action: PayloadAction<string>) { state.modalTextColor = action.payload; },

    setInfoBackgroundColor(state, action: PayloadAction<string>) { state.infoBackgroundColor = action.payload; },
    setInfoBorderColor(state, action: PayloadAction<string>) { state.infoBorderColor = action.payload; },
    setInfoBorderWidth(state, action: PayloadAction<string>) { state.infoBorderWidth = action.payload; },
    setInfoBorderRadius(state, action: PayloadAction<string>) { state.infoBorderRadius = action.payload; },
    setInfoFontFamily(state, action: PayloadAction<string>) { state.infoFontFamily = action.payload; },
    setInfoTextColor(state, action: PayloadAction<string>) { state.infoTextColor = action.payload; },

    setInputBackgroundColor(state, action: PayloadAction<string>) { state.inputBackgroundColor = action.payload; },
    setInputBorderColor(state, action: PayloadAction<string>) { state.inputBorderColor = action.payload; },
    setInputBorderWidth(state, action: PayloadAction<string>) { state.inputBorderWidth = action.payload; },
    setInputBorderRadius(state, action: PayloadAction<string>) { state.inputBorderRadius = action.payload; },
    setInputFontFamily(state, action: PayloadAction<string>) { state.inputFontFamily = action.payload; },
    setInputTextColor(state, action: PayloadAction<string>) { state.inputTextColor = action.payload; },

    setTableFontFamily(state, action: PayloadAction<string>) { state.tableFontFamily = action.payload; },
    setTableTextColor(state, action: PayloadAction<string>) { state.tableTextColor = action.payload; },

    setTileBorderColor(state, action: PayloadAction<string>) { state.tileBorderColor = action.payload; },
    setTileBorderWidth(state, action: PayloadAction<string>) { state.tileBorderWidth = action.payload; },
    setTileBorderRadius(state, action: PayloadAction<string>) { state.tileBorderRadius = action.payload; },
    setTileColorCorrect(state, action: PayloadAction<string>) { state.tileColorCorrect = action.payload; },
    setTileColorIncorrect(state, action: PayloadAction<string>) { state.tileColorIncorrect = action.payload; },
    setTileColorPartial(state, action: PayloadAction<string>) { state.tileColorPartial = action.payload; },
    setTileColorDefault(state, action: PayloadAction<string>) { state.tileColorDefault = action.payload; },
    setTileFontFamily(state, action: PayloadAction<string>) { state.tileFontFamily = action.payload; },
    setTileTextCorrect(state, action: PayloadAction<string>) { state.tileTextCorrect = action.payload; },
    setTileTextInCorrect(state, action: PayloadAction<string>) { state.tileTextInCorrect = action.payload; },
    setTileTextPartial(state, action: PayloadAction<string>) { state.tileTextPartial = action.payload; },
    setTileTextDefault(state, action: PayloadAction<string>) { state.tileTextDefault = action.payload; },

    setYesterdayBackgroundColor(state, action: PayloadAction<string>) { state.yesterdayBackgroundColor = action.payload; },
    setYesterdayBorderColor(state, action: PayloadAction<string>) { state.yesterdayBorderColor = action.payload; },
    setYesterdayBorderWidth(state, action: PayloadAction<string>) { state.yesterdayBorderWidth = action.payload; },
    setYesterdayBorderRadius(state, action: PayloadAction<string>) { state.yesterdayBorderRadius = action.payload; },
    setYesterdayFontFamily(state, action: PayloadAction<string>) { state.yesterdayFontFamily = action.payload; },
    setYesterdayTextColor(state, action: PayloadAction<string>) { state.yesterdayTextColor = action.payload; },
    setYesterdayItemFontFamily(state, action: PayloadAction<string>) { state.yesterdayItemFontFamily = action.payload; },
    setYesterdayItemTextColor(state, action: PayloadAction<string>) { state.yesterdayItemTextColor = action.payload; },

    setKeyBackgroundColor(state, action: PayloadAction<string>) { state.keyBackgroundColor = action.payload; },
    setKeyBorderColor(state, action: PayloadAction<string>) { state.keyBorderColor = action.payload; },
    setKeyBorderWidth(state, action: PayloadAction<string>) { state.keyBorderWidth = action.payload; },
    setKeyBorderRadius(state, action: PayloadAction<string>) { state.keyBorderRadius = action.payload; },
    setKeyFontFamily(state, action: PayloadAction<string>) { state.keyFontFamily = action.payload; },
    setKeyTextColor(state, action: PayloadAction<string>) { state.keyTextColor = action.payload; },

    setAtlasBackgroundColor(state, action: PayloadAction<string>) { state.atlasBackgroundColor = action.payload; },
    setAtlasBorderColor(state, action: PayloadAction<string>) { state.atlasBorderColor = action.payload; },
    setAtlasBorderWidth(state, action: PayloadAction<string>) { state.atlasBorderWidth = action.payload; },
    setAtlasBorderRadius(state, action: PayloadAction<string>) { state.atlasBorderRadius = action.payload; },
    setAtlasFontFamily(state, action: PayloadAction<string>) { state.atlasFontFamily = action.payload; },
    setAtlasTextColor(state, action: PayloadAction<string>) { state.atlasTextColor = action.payload; },
    
    setFooterTextColor(state, action: PayloadAction<string>) { state.footerTextColor = action.payload; },
    setFooterFontFamily(state, action: PayloadAction<string>) { state.footerFontFamily = action.payload; },

    setName(state, action: PayloadAction<string>) { state.name = action.payload; },
    setHeader(state, action: PayloadAction<string>) { state.header = action.payload; },
    setBody(state, action: PayloadAction<string>) { state.body = action.payload; },
    setPlaceholder(state, action: PayloadAction<string>) { state.placeholder = action.payload; },
    setAttributes(state, action: PayloadAction<string[]>) { state.attributes = action.payload; },
    setClueTypes(state, action: PayloadAction<ClueType[]>) { state.clueTypes = action.payload; },
    setClues(state, action: PayloadAction<string[]>) { state.clues = action.payload; },
    setGuesses(state, action: PayloadAction<Guess[]>) { state.guesses = action.payload; },
    setGames(state, action: PayloadAction<Games[]>) { state.games = action.payload; },
    setYesterdaysAnswer(state, action: PayloadAction<string>) { state.yesterdaysAnswer = action.payload; },
    setLastFetchedDate(state, action: PayloadAction<string>) { state.lastFetchedDate = action.payload; },

    refreshDaily(state, action: PayloadAction<DailyState>) {      
      const incoming = action.payload;
      for (const key in incoming) {
        const typedKey = key as keyof DailyState;
        const current = state[typedKey];
        const next = incoming[typedKey];
        const isEmptyString = typeof current === 'string' && current === '';
        const isEmptyArray = Array.isArray(current) && current.length === 0;

        if (isEmptyString || isEmptyArray || current === undefined) {
          state[typedKey] = next as any;
        }
      }
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