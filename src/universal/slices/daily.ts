import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Guess, ClueType, Games, SectionStyle } from '../types';

interface TileStyle extends SectionStyle {
  colors: {
    correct: string;
    incorrect: string;
    partial: string;
    default: string;
  };
  labels: {
    correct: string;
    incorrect: string;
    partial: string;
    default: string;
  };
}

interface TableSection extends SectionStyle {
  tile: TileStyle;
}

interface YesterdaySection extends SectionStyle {
  item: SectionStyle;
}

export interface DailyState {
  name: string;
  header: string;
  body: string;
  placeholder: string;
  attributes: string[];
  clueTypes: ClueType[];
  clues: string[];
  guesses: Guess[];
  yesterdaysAnswer: string;
  games: Games[];
  lastFetchedDate?: string;
  background: string;
  logo: string;
  sections: {
    header: SectionStyle;
    menu: SectionStyle;
    description: SectionStyle;
    input: SectionStyle;
    table: TableSection;
    key: SectionStyle;
    today: SectionStyle;
    share: SectionStyle;
    yesterday: YesterdaySection
    moreGames: SectionStyle;
    about: SectionStyle;
    modal: SectionStyle;
  };
}

const emptySection: SectionStyle = {
  backgroundColor: '',
  textColor: '',
  fontFamily: '',
  fontSize: '',
  fontWeight: '',
  padding: '',
  margin: '',
  borderColor: '',
  borderWidth: '',
  borderRadius: '',
  boxShadow: '',
  backgroundImage: '',
  backgroundSize: 'auto',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '',
  textAlign: 'center',
  decorationTopImage: '',
  decorationTopHeight: '',
  decorationBottomImage: '',
  decorationBottomHeight: '',
};

const initialState: DailyState = {
  name: '',
  header: '',
  body: '',
  placeholder: '',
  attributes: [],
  clueTypes: [],
  clues: [],
  guesses: [],
  yesterdaysAnswer: '',
  games: [],
  lastFetchedDate: undefined,
  background: '',
  logo: '',

  sections: {
    header: { ...emptySection },
    menu: { ...emptySection },
    description: { ...emptySection },
    input: { ...emptySection },
    table: {
      ...emptySection,
      tile: {
        ...emptySection,
        colors: { correct: '', incorrect: '', partial: '', default: '' },
        labels: { correct: '', incorrect: '', partial: '', default: '' },
      },
    },
    key: { ...emptySection },
    today: { ...emptySection },
    share: { ...emptySection },
    yesterday: { ...emptySection, item: { ...emptySection } },
    moreGames: { ...emptySection },
    about: { ...emptySection },
    modal: { ...emptySection },
  },
};


const dailySlice = createSlice({
  name: 'daily',
  initialState,
  reducers: {
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
    setBackground(state, action: PayloadAction<string>) { state.background = action.payload; },
    setLogo(state, action: PayloadAction<string>) { state.logo = action.payload },
    updateSectionStyle(
      state,
      action: PayloadAction<{
        section: keyof DailyState['sections'];
        style: Partial<SectionStyle>;
      }>
    ) {
      const { section, style } = action.payload;
      const target = state.sections[section];

      if (!target || section === 'table' || section === 'yesterday') return;

      Object.assign(target, style);
    },
    updateTileStyle(
      state,
      action: PayloadAction<{
        style?: Partial<SectionStyle>;
        colors?: Partial<DailyState['sections']['table']['tile']['colors']>;
        labels?: Partial<DailyState['sections']['table']['tile']['labels']>;
      }>
    ) {
      const { style, colors, labels } = action.payload;
      if (style) Object.assign(state.sections.table.tile, style);
      if (colors) Object.assign(state.sections.table.tile.colors, colors);
      if (labels) Object.assign(state.sections.table.tile.labels, labels);
    },
    hydrateDaily(state, action: PayloadAction<DailyState>) {
      Object.assign(state, action.payload);
    },
    updateDaily(state, action: PayloadAction<Partial<DailyState>>) {
      const incoming = action.payload;
      if (!incoming) return;

      for (const key in incoming) {
        const typedKey = key as keyof DailyState;
        const value = incoming[typedKey];

        if (typedKey === 'sections' && value && typeof value === 'object') {
          const sectionValue = value as Partial<DailyState['sections']>;
          for (const sectionKey in sectionValue) {
            const typedSectionKey = sectionKey as keyof DailyState['sections'];
            const section = sectionValue[typedSectionKey];
            if (!(section && Object.keys(section).length > 1)) continue;

            let currentSection = state.sections[typedSectionKey] || ({} as any);

            if (typedSectionKey === 'table' && 'tile' in section) {
              const tile = (section as TableSection).tile;
              currentSection = {
                ...currentSection,
                ...section,
                tile: {
                  ...((currentSection as TableSection).tile ?? {}),
                  ...tile,
                },
              };
            } else if (typedSectionKey === 'yesterday' && 'item' in section) {
              const item = (section as YesterdaySection).item;
              currentSection = {
                ...currentSection,
                ...section,
                item: {
                  ...((currentSection as YesterdaySection).item ?? {}),
                  ...item,
                },
              };
            } else {
              currentSection = {
                ...currentSection,
                ...section,
              };
            }

            state.sections[typedSectionKey] = currentSection as any;
          }
        } else {
          (state[typedKey] as any) = value;
        }
      }
    },
    refreshDaily(state, action: PayloadAction<DailyState>) {
      const incoming = action.payload;
      if (!incoming) return;

      for (const key in incoming) {
        const typedKey = key as keyof DailyState;
        const current = state[typedKey];
        const next = incoming[typedKey];

        if (typedKey === 'sections' && next && typeof next === 'object') {
          const nextSections = next as DailyState['sections'];
          for (const sectionKey in nextSections) {
            const typedSectionKey = sectionKey as keyof DailyState['sections'];
            const nextSection = nextSections[typedSectionKey];
            if (!(nextSection && Object.keys(nextSection).length > 1)) continue;

            let currentSection = state.sections[typedSectionKey];

            const isEmpty = Object.values(currentSection).every(
              (v) => v === '' || v === null || v === undefined
            );

            if (isEmpty) {

              if (typedSectionKey === 'table' && 'tile' in nextSection) {
                const tile = (nextSection as TableSection).tile;
                currentSection = {
                  ...nextSection,
                  tile: {
                    ...((currentSection as TableSection).tile ?? {}),
                    ...tile,
                  },
                };
              } else if (typedSectionKey === 'yesterday' && 'item' in nextSection) {
                const item = (nextSection as YesterdaySection).item;
                currentSection = {
                  ...nextSection,
                  item: {
                    ...((currentSection as YesterdaySection).item ?? {}),
                    ...item,
                  },
                };
              } else {
                currentSection = {
                  ...currentSection,
                  ...nextSection,
                };
              }

              state.sections[typedSectionKey] = currentSection as any;
            }
          }
        } else {
          const isEmptyString = typeof current === 'string' && current === '';
          const isEmptyArray = Array.isArray(current) && current.length === 0;
          if (isEmptyString || isEmptyArray || current === undefined) {
            (state[typedKey] as any) = next;
          }
        }
      }
    },
    clearState(state) { Object.assign(state, initialState); },
    resetDaily() { return initialState; },
  },
});

export const dailyActions = dailySlice.actions;
export default dailySlice.reducer;