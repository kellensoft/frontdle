export interface UnifiedStorage {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

export interface Guess {
    guess: string;
    image: string;
    validation: Item[];
}

export interface ContentBlock {
  type: 'text' | 'image';
  values?: string[];
  urls?: string[];
}

export type ItemState = 'correct' | 'incorrect' | 'partial' | 'default';

export interface Item {
  state: ItemState;
  content: ContentBlock[];
  arrow?: 'up' | 'down';
}

export interface Games {
  name: string;
  icon: string;
}

export interface AutocompleteItem {
  name: string;
  image: string;
}

export interface ClueType {
  name: string;
  description: string;
}