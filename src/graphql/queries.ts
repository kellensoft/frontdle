import { gql } from '@apollo/client';

export const GET_GAME_INFO = gql`
  query gameInfo($game: String!) {
    gameInfo(game: $game) {
      name
      header
      body
      placeholder
      background
      icon
      foregroundColor
      borderColor
      textColor
      clueTypes {
        clueType
        clueDescription
      }
      games {
        name
        icon
      }
      yesterdaysAnswer
    }
  }
`;

export const GET_CLUE = gql`
  query Clue($game: String!, $type: String!) {
    clue(game: $game, type: $type) {
      type
      value
    }
  }
`;

export const GET_AUTOCOMPLETE = gql`
  query Autocomplete($game: String!, $search: String!) {
    autocomplete(game: $game, search: $search) {
      name
      image
    }
  }
`;

export const GET_GUESS_RESULT = gql`
  query Guess($game: String!, $word: String!) {
    guess(game: $game, word: $word) {
      guess
      image
      validation {
        type
        value
        color
        direction
      }
    }
  }
`;

