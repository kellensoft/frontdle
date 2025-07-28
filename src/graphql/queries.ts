import { gql } from '@apollo/client';

export const GET_GAME_INFO = gql`
  query gameInfo($game: String!) {
    gameInfo(game: $game) {
      name
      header
      body
      placeholder
      attributes
      background
      icon

      logoTextColor
      logoFontFamily

      modalBackgroundColor
      modalBorderColor
      modalBorderWidth
      modalBorderRadius
      modalFontFamily
      modalTextColor

      infoBackgroundColor
      infoBorderColor
      infoBorderWidth
      infoBorderRadius
      infoFontFamily
      infoTextColor

      inputBackgroundColor
      inputBorderColor
      inputBorderWidth
      inputBorderRadius
      inputFontFamily
      inputTextColor

      tableFontFamily
      tableTextColor

      tileBorderColor
      tileBorderWidth
      tileBorderRadius
      tileColorCorrect
      tileColorIncorrect
      tileColorPartial
      tileColorDefault
      tileFontFamily
      tileTextCorrect
      tileTextInCorrect
      tileTextPartial
      tileTextDefault

      yesterdayBackgroundColor
      yesterdayBorderColor
      yesterdayBorderWidth
      yesterdayBorderRadius
      yesterdayFontFamily
      yesterdayTextColor
      yesterdayItemFontFamily
      yesterdayItemTextColor

      keyBackgroundColor
      keyBorderColor
      keyBorderWidth
      keyBorderRadius
      keyFontFamily
      keyTextColor

      atlasBackgroundColor
      atlasBorderColor
      atlasBorderWidth
      atlasBorderRadius
      atlasFontFamily
      atlasTextColor

      footerTextColor
      footerFontFamily

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
        state
        content {
          type
          values
          urls
        }
        arrow
      }
    }
  }
`;

