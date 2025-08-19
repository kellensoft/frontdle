import React, { useEffect } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { dailyActions } from '../../universal/slices/daily';
import type { RootState } from '../../universal/store';
import { GET_GAME_INFO } from '../../graphql/queries';
import { SectionStyle } from '../../universal/types';

import { setFavicon } from '../../utils/setFavicon';

import { Header } from '../../components/Header';
import { GameInfo } from '../../components/GameInfo';
import { Spacer } from '../../components/Spacer';
import { GuessTable } from '../../components/GuessTable';
import { ExtraData } from '../../components/ExtraData';
import { Footer } from '../../components/Footer';
import { GuessInput } from '../../components/GuessInput';

const applySectionStyles = (prefix: string, style?: SectionStyle) => {
  if (!style) return;
  const root = document.body.style;

  if (style.backgroundColor)
    root.setProperty(`--${prefix}-background-color`, style.backgroundColor);
  if (style.backgroundImage)
    root.setProperty(`--${prefix}-background-image`, `url(${style.backgroundImage})`);
  if (style.backgroundSize)
    root.setProperty(`--${prefix}-background-size`, style.backgroundSize);
  if (style.backgroundRepeat)
    root.setProperty(`--${prefix}-background-repeat`, style.backgroundRepeat);
  if (style.backgroundPosition)
    root.setProperty(`--${prefix}-background-position`, style.backgroundPosition);

  if (style.borderColor)
    root.setProperty(`--${prefix}-border-color`, style.borderColor);
  if (style.borderWidth)
    root.setProperty(`--${prefix}-border-width`, style.borderWidth);
  if (style.borderRadius)
    root.setProperty(`--${prefix}-border-radius`, style.borderRadius);
  if (style.boxShadow)
    root.setProperty(`--${prefix}-box-shadow`, style.boxShadow);

  if (style.fontFamily)
    root.setProperty(`--${prefix}-font-family`, style.fontFamily);
  if (style.fontSize)
    root.setProperty(`--${prefix}-font-size`, style.fontSize);
  if (style.fontWeight)
    root.setProperty(`--${prefix}-font-weight`, style.fontWeight);
  if (style.textColor)
    root.setProperty(`--${prefix}-text-color`, style.textColor);

  if (style.padding)
    root.setProperty(`--${prefix}-padding`, style.padding);
  if (style.margin)
    root.setProperty(`--${prefix}-margin`, style.margin);

  if (style.decorationTopImage)
    root.setProperty(`--${prefix}-decoration-top-image`, `url(${style.decorationTopImage})`);
  if (style.decorationTopHeight)
    root.setProperty(`--${prefix}-decoration-top-height`, style.decorationTopHeight);
  if (style.decorationBottomImage)
    root.setProperty(`--${prefix}-decoration-bottom-image`, `url(${style.decorationBottomImage})`);
  if (style.decorationBottomHeight)
    root.setProperty(`--${prefix}-decoration-bottom-height`, style.decorationBottomHeight);
};

export const Game: React.FC = () => {
  const { game } = useParams<{ game: string }>();

  const { data, loading, error } = useQuery(GET_GAME_INFO, {
    variables: { game },
    fetchPolicy: 'no-cache',
  });

  const dispatch = useDispatch();
  const today = new Date().toISOString().split('T')[0];
  const lastFetched = useSelector((state: RootState) => state.daily.lastFetchedDate);

  const { background, sections } = useSelector((state: RootState) => state.daily);

  useEffect(() => {
    if (loading || error) return;
    if (!data?.gameInfo) return;

    const gameInfo = data.gameInfo;

    document.title = gameInfo.name || 'Blankdle';

    const originalFavicon = (document.querySelector("link[rel~='icon']") as HTMLLinkElement)?.href;
    if (gameInfo.icon) {
      setFavicon(gameInfo.icon);
    }

    if (lastFetched !== today) {
      dispatch(dailyActions.clearState());
      dispatch(dailyActions.updateDaily(gameInfo));
      dispatch(dailyActions.setLastFetchedDate(today));
    } else {
      dispatch(dailyActions.refreshDaily(gameInfo));
    }

    if (!sections) return;

    applySectionStyles('header', sections.header);
    applySectionStyles('menu', sections.menu);
    applySectionStyles('modal', sections.modal);
    applySectionStyles('info', sections.description);
    applySectionStyles('input', sections.input);
    applySectionStyles('table', sections.table);
    applySectionStyles('tile', sections.table?.tile);
    applySectionStyles('yesterday', sections.yesterday);
    applySectionStyles('yesterday-item', sections.yesterday?.item);
    applySectionStyles('key', sections.key);
    applySectionStyles('today', sections.today);
    applySectionStyles('share', sections.share);
    applySectionStyles('more-games', sections.moreGames);
    applySectionStyles('about', sections.about);

    const root = document.body.style;
    const tile = sections.table?.tile;

    if (tile?.colors) {
      root.setProperty('--tile-color-correct', tile.colors.correct || '#28dd50');
      root.setProperty('--tile-color-incorrect', tile.colors.incorrect || '#c5000f');
      root.setProperty('--tile-color-partial', tile.colors.partial || '#ffc409');
      root.setProperty('--tile-color-default', tile.colors.default || '#f6f8fc');
    }

    if (tile?.labels) {
      root.setProperty('--tile-text-correct', tile.labels.correct || 'Correct');
      root.setProperty('--tile-text-incorrect', tile.labels.incorrect || 'Incorrect');
      root.setProperty('--tile-text-partial', tile.labels.partial || 'Partial');
      root.setProperty('--tile-text-default', tile.labels.default || 'Default');
    }

    return () => {
      if (originalFavicon) {
        setFavicon(originalFavicon);
      }
    };
  }, [data, dispatch, today, lastFetched]);

  return (
    <IonPage style={{backgroundImage: `url(${background})`}}>
        <IonContent style={{'--background': 'transparent'}}>
            <Header />
            <GameInfo />
            <GuessInput />
            <Spacer />
            <GuessTable />
            <Spacer />
            <ExtraData />
            <Footer />
        </IonContent>
    </IonPage>
  );
};