import React, { useEffect } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { dailyActions } from '../../universal/slices/daily';
import type { RootState } from '../../universal/store';
import { GET_GAME_INFO } from '../../graphql/queries';

//import styles from './Game.module.css';

import { Header } from '../../components/Header';
import { GameInfo } from '../../components/GameInfo';
import { Spacer } from '../../components/Spacer';
import { GuessTable } from '../../components/GuessTable';
import { ExtraData } from '../../components/ExtraData';
import { Footer } from '../../components/Footer';

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
    if (lastFetched !== today) {
      dispatch(dailyActions.clearState());
      dispatch(dailyActions.updateDaily(data.gameInfo));
      dispatch(dailyActions.setLastFetchedDate(today));
    } else {
      dispatch(dailyActions.refreshDaily(data?.gameInfo));
    }
  }, [data, dispatch, today, lastFetched]);

  const background = useSelector((state: RootState) => state.daily.background);
  const foregroundColor = useSelector((state: RootState) => state.daily.foregroundColor);
  const borderColor = useSelector((state: RootState) => state.daily.borderColor);
  const textColor = useSelector((state: RootState) => state.daily.textColor);

  document.body.style.setProperty('--ion-color-bg', background ? `url(${background})` : 'var(--ion-color-primary)');
  document.body.style.setProperty('--ion-color-fg', foregroundColor || '#3d3d3d');
  document.body.style.setProperty('--ion-color-border', borderColor || '#2b2b2b');
  document.body.style.setProperty('--ion-color-text', textColor || '#d6d6d6');

  return (
    <IonPage>
        (!error ? 
        <IonContent fullscreen>
            <Header />
            <GameInfo />
            <Spacer />
            <GuessTable />
            <Spacer />
            <ExtraData />
            <Footer />
        </IonContent>
    </IonPage>
  );
};