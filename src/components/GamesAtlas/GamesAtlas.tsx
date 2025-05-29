import React from 'react';
import { 
    IonRow,
    IonCol,
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
  const name = useSelector((state: RootState) => state.daily.name);
  const games = useSelector((state: RootState) => state.daily.games);

  const handleClick = (game: string) => {
    window.location.href = `/${game.toLowerCase()}`;
  };

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

        <IonCardContent className={styles.gameList}>
          <IonRow className="ion-justify-content-center">
            {games
            .filter(game => game.name.toLowerCase() !== name.toLowerCase())
            .slice(0,5)
            .map((game, index) => (
              <IonButton key={index} fill="clear" className={styles.gameButton} onClick={() => handleClick(game.name)}>
                <IonCol className="ion-align-content-center ion-justify-content-center">
                  <IonRow className="ion-justify-content-center">
                    <img className={styles.gameIcon} src={game.icon} alt={game.name[0].toUpperCase()} width={32} height={32}/>
                  </IonRow>
                  <IonRow className="ion-padding ion-justify-content-center">
                    <IonText className={styles.gameName}>{game.name}</IonText>
                  </IonRow>
                </IonCol>
              </IonButton>
            ))}
          </IonRow>
        </IonCardContent>
      </IonCard>
    </IonRow>
  );
};