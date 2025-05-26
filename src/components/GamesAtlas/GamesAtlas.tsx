import React from 'react';
import { 
    IonRow,
    IonText,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton
} from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../universal/store';

import styles from './GamesAtlas.module.css';

export const GamesAtlas: React.FC = () => {
  const games = useSelector((state: RootState) => state.settings.games);

  return (
    <IonRow className="ion-padding ion-justify-content-center">
      <IonCard className={styles.card}>
        <IonCardHeader>
          <IonCardTitle className="ion-text-center">Want more?</IonCardTitle>
          { games.length === 0 ? (
            <IonCardSubtitle className="ion-text-center">No other games available.</IonCardSubtitle>
          ) : (
            <IonCardSubtitle className="ion-text-center">Play our other games:</IonCardSubtitle>
          )}
        </IonCardHeader>

        <IonCardContent className="game-list">
          {games.map((game, index) => (
            <IonButton key={index} fill="clear" className="game-button">
              <img src={game.icon} alt={game.name[0].toUpperCase()} />
              <IonText className="game-name">{game.name}</IonText>
            </IonButton>
          ))}
        </IonCardContent>
      </IonCard>
    </IonRow>
  );
};