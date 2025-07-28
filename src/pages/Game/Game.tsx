import React, { useEffect } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { dailyActions } from '../../universal/slices/daily';
import type { RootState } from '../../universal/store';
import { GET_GAME_INFO } from '../../graphql/queries';

import { setFavicon } from '../../utils/setFavicon';

import { Header } from '../../components/Header';
import { GameInfo } from '../../components/GameInfo';
import { Spacer } from '../../components/Spacer';
import { GuessTable } from '../../components/GuessTable';
import { ExtraData } from '../../components/ExtraData';
import { Footer } from '../../components/Footer';
import { GuessInput } from '../../components/GuessInput';

export const Game: React.FC = () => {
  const { game } = useParams<{ game: string }>();

  const { data } = useQuery(GET_GAME_INFO, {
    variables: { game },
    fetchPolicy: 'cache-first',
  });

  const dispatch = useDispatch();
  const today = new Date().toISOString().split('T')[0];
  const lastFetched = useSelector((state: RootState) => state.daily.lastFetchedDate);

  useEffect(() => {
    if (!data || !data.gameInfo) return;
    if (data.gameInfo.name) document.title = data.gameInfo.name || 'Blankdle';
    const originalHref = (document.querySelector("link[rel~='icon']") as HTMLLinkElement)?.href;

    if (data.gameInfo?.icon) {
      setFavicon(data.gameInfo.icon);
    }

    if (lastFetched !== today) {
      dispatch(dailyActions.clearState());
      dispatch(dailyActions.updateDaily(data.gameInfo));
      dispatch(dailyActions.setLastFetchedDate(today));
    } else {
      dispatch(dailyActions.refreshDaily(data?.gameInfo));
    }

    return () => {
      if (originalHref) {
        setFavicon(originalHref);
      }
    };
  }, [data, dispatch, today, lastFetched]);

  const {
    background,
    logoTextColor,
    logoFontFamily,
    modalBackgroundColor,
    modalBorderColor,
    modalBorderWidth,
    modalBorderRadius,
    modalFontFamily,
    modalTextColor,
    infoBackgroundColor,
    infoBorderColor,
    infoBorderWidth,
    infoBorderRadius,
    infoFontFamily,
    infoTextColor,
    inputBackgroundColor,
    inputBorderColor,
    inputBorderWidth,
    inputBorderRadius,
    inputFontFamily,
    inputTextColor,
    tableFontFamily,
    tableTextColor,
    tileBorderColor,
    tileBorderWidth,
    tileBorderRadius,
    tileColorCorrect,
    tileColorIncorrect,
    tileColorPartial,
    tileColorDefault,
    tileFontFamily,
    tileTextCorrect,
    tileTextInCorrect,
    tileTextPartial,
    tileTextDefault,
    yesterdayBackgroundColor,
    yesterdayBorderColor,
    yesterdayBorderWidth,
    yesterdayBorderRadius,
    yesterdayFontFamily,
    yesterdayTextColor,
    yesterdayItemFontFamily,
    yesterdayItemTextColor,
    keyBackgroundColor,
    keyBorderColor,
    keyBorderWidth,
    keyBorderRadius,
    keyFontFamily,
    keyTextColor,
    atlasBackgroundColor,
    atlasBorderColor,
    atlasBorderWidth,
    atlasBorderRadius,
    atlasFontFamily,
    atlasTextColor,
    footerTextColor,
    footerFontFamily,
  } = useSelector((state: RootState) => state.daily);

  document.body.style.setProperty('--logo-text-color', logoTextColor || '#d6d6d6');
  document.body.style.setProperty('--logo-font-family', logoFontFamily || 'Roboto');

  document.body.style.setProperty('--modal-background-color', modalBackgroundColor || '#2b2b2b');
  document.body.style.setProperty('--modal-border-color', modalBorderColor || '#2b2b2b')
  document.body.style.setProperty('--modal-border-width', modalBorderWidth || '0');
  document.body.style.setProperty('--modal-border-radius', modalBorderRadius || '0'); 
  document.body.style.setProperty('--modal-font-family', modalFontFamily || 'Roboto');
  document.body.style.setProperty('--modal-text-color', modalTextColor || '#d6d6d6');

  document.body.style.setProperty('--info-background-color', infoBackgroundColor || '#2b2b2b');
  document.body.style.setProperty('--info-border-color', infoBorderColor || '#2b2b2b');
  document.body.style.setProperty('--info-border-width', infoBorderWidth || '0');
  document.body.style.setProperty('--info-border-radius', infoBorderRadius || '0');
  document.body.style.setProperty('--info-font-family', infoFontFamily || 'Roboto');
  document.body.style.setProperty('--info-text-color', infoTextColor || '#d6d6d6');

  document.body.style.setProperty('--input-background-color', inputBackgroundColor || '#f6f8fc');
  document.body.style.setProperty('--input-border-color', inputBorderColor || '#2b2b2b');
  document.body.style.setProperty('--input-border-width', inputBorderWidth || '0');
  document.body.style.setProperty('--input-border-radius', inputBorderRadius || '0')
  document.body.style.setProperty('--input-font-family', inputFontFamily || 'Roboto');
  document.body.style.setProperty('--input-text-color', inputTextColor || '#000000');

  document.body.style.setProperty('--table-font-family', tableFontFamily || 'Roboto');
  document.body.style.setProperty('--table-text-color', tableTextColor || '#d6d6d6');

  document.body.style.setProperty('--tile-border-color', tileBorderColor || 'none');
  document.body.style.setProperty('--tile-border-width', tileBorderWidth || '0');
  document.body.style.setProperty('--tile-border-radius', tileBorderRadius || '0');
  document.body.style.setProperty('--tile-color-incorrect', tileColorIncorrect || '#c5000f');
  document.body.style.setProperty('--tile-color-correct', tileColorCorrect || '#28dd50');
  document.body.style.setProperty('--tile-color-partial', tileColorPartial || '#ffc409');
  document.body.style.setProperty('--tile-color-default', tileColorDefault || '#f6f8fc');
  document.body.style.setProperty('--tile-font-family', tileFontFamily || 'Roboto');
  document.body.style.setProperty('--tile-text-color-correct', tileTextCorrect || '#000000');
  document.body.style.setProperty('--tile-text-color-incorrect', tileTextInCorrect || '#000000');
  document.body.style.setProperty('--tile-text-color-partial', tileTextPartial || '#000000');
  document.body.style.setProperty('--tile-text-color-default', tileTextDefault || '#000000');

  document.body.style.setProperty('--yesterday-background-color', yesterdayBackgroundColor || 'transparent');
  document.body.style.setProperty('--yesterday-border-color', yesterdayBorderColor || 'transparent');
  document.body.style.setProperty('--yesterday-border-width', yesterdayBorderWidth || '0');
  document.body.style.setProperty('--yesterday-border-radius', yesterdayBorderRadius || '0');
  document.body.style.setProperty('--yesterday-font-family', yesterdayFontFamily || 'Roboto');
  document.body.style.setProperty('--yesterday-text-color', yesterdayTextColor || '#d6d6d6');
  document.body.style.setProperty('--yesterday-item-font-family', yesterdayItemFontFamily || 'Roboto');
  document.body.style.setProperty('--yesterday-item-text-color', yesterdayItemTextColor || '#d6d6d6');  

  document.body.style.setProperty('--key-background-color', keyBackgroundColor || '#3d3d3d');
  document.body.style.setProperty('--key-border-color', keyBorderColor || '#2b2b2b');
  document.body.style.setProperty('--key-border-width', keyBorderWidth || '0.3rem');
  document.body.style.setProperty('--key-border-radius', keyBorderRadius || '0.9rem');
  document.body.style.setProperty('--key-font-family', keyFontFamily || 'Roboto');
  document.body.style.setProperty('--key-text-color', keyTextColor || '#d6d6d6');

  document.body.style.setProperty('--atlas-background-color', atlasBackgroundColor || '#2b2b2b');
  document.body.style.setProperty('--atlas-border-color', atlasBorderColor || '#2b2b2b');
  document.body.style.setProperty('--atlas-border-width', atlasBorderWidth || '0');
  document.body.style.setProperty('--atlas-border-radius', atlasBorderRadius || '0');
  document.body.style.setProperty('--atlas-font-family', atlasFontFamily || 'Roboto');
  document.body.style.setProperty('--atlas-text-color', atlasTextColor || '#d6d6d6');

  document.body.style.setProperty('--logo-text-color', footerTextColor || '#d6d6d6');
  document.body.style.setProperty('--logo-font-family', footerFontFamily || 'Roboto');

  return (
    <IonPage style={{backgroundImage: `url(${background})`}}>
        <IonContent 
          style={{ 
            '--background': 'transparent',
            }}>
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