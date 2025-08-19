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
      logo
      icon
      clueTypes {     
        clueType
        clueDescription
      }
      games {
        name
        icon
      }
      yesterdaysAnswer
      sections {
        header { ...SectionStyleFields }
        menu { ...SectionStyleFields }
        description { ...SectionStyleFields }
        input { ...SectionStyleFields }
        key { ...SectionStyleFields }
        today { ...SectionStyleFields }
        share { ...SectionStyleFields }
        moreGames { ...SectionStyleFields }
        about { ...SectionStyleFields }
        modal { ...SectionStyleFields }

        table {
          ...TableSectionFields
        }

        yesterday {
          ...YesterdaySectionFields
        }
      }
    }
  }


  fragment SectionStyleFields on BasicSection {
    __typename
    padding
    margin
    textAlign
    backgroundColor
    backgroundImage
    backgroundSize
    backgroundRepeat
    backgroundPosition
    borderColor
    borderWidth
    borderRadius
    boxShadow
    fontFamily
    fontSize
    fontWeight
    textColor
    decorationTopImage
    decorationTopHeight
    decorationBottomImage
    decorationBottomHeight
  }

  fragment TileStyleFields on TileStyle {
    __typename
    padding
    margin
    textAlign
    backgroundColor
    backgroundImage
    backgroundSize
    backgroundRepeat
    backgroundPosition
    borderColor
    borderWidth
    borderRadius
    boxShadow
    fontFamily
    fontSize
    fontWeight
    textColor
    decorationTopImage
    decorationTopHeight
    decorationBottomImage
    decorationBottomHeight
    colors {
      correct
      incorrect
      partial
      default
    }
    labels {
      correct
      incorrect
      partial
      default
    }
  }

  fragment TableSectionFields on TableSection {
    __typename
    padding
    margin
    textAlign
    backgroundColor
    backgroundImage
    backgroundSize
    backgroundRepeat
    backgroundPosition
    borderColor
    borderWidth
    borderRadius
    boxShadow
    fontFamily
    fontSize
    fontWeight
    textColor
    decorationTopImage
    decorationTopHeight
    decorationBottomImage
    decorationBottomHeight
    tile {
      ...TileStyleFields
    }
  }

  fragment YesterdaySectionFields on YesterdaySection {
    __typename
    padding
    margin
    textAlign
    backgroundColor
    backgroundImage
    backgroundSize
    backgroundRepeat
    backgroundPosition
    borderColor
    borderWidth
    borderRadius
    boxShadow
    fontFamily
    fontSize
    fontWeight
    textColor
    decorationTopImage
    decorationTopHeight
    decorationBottomImage
    decorationBottomHeight
    item {
      ...SectionStyleFields
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

