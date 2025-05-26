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