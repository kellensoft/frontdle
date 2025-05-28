export interface UnifiedStorage {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

export interface Guess {
    word: string;
    attributes: Attribute[];
}

export interface Attribute {
    type: string;
    value: string;
    color: string;
    direction: string;
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