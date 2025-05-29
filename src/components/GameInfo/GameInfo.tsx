import React from 'react';
import { 
    IonCol,
    IonRow,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
} from '@ionic/react';
import { 
    removeOutline, 
    reorderTwoOutline, 
    reorderThreeOutline, 
} from 'ionicons/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../universal/store';

import { ClueItem } from '../ClueItem';

import styles from './GameInfo.module.css';

export const GameInfo: React.FC = () => {
  const header = useSelector((state: RootState) => state.daily.header);
  const body = useSelector((state: RootState) => state.daily.body);

  const clueTypes = useSelector((state: RootState) => state.daily.clueTypes);
  const clues = useSelector((state: RootState) => state.daily.clues);
  const icons = [removeOutline, reorderTwoOutline, reorderThreeOutline];
  const numberOfClues = Math.min(clues.length, clueTypes.length, icons.length);
  
  const tries = useSelector((state: RootState) => state.daily.guesses.length);

  return (
      <IonRow className="ion-justify-content-center">
        <IonCard className={`ion-padding ion-no-margin ${styles.card}`}>
          <IonCardHeader>
            <IonCardTitle className="instruction-header">{header || 'Loading...'}</IonCardTitle>
            <IonCardSubtitle className="instruction-text">{body || 'Loading...'}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-center">
            { tries > 1 &&
              <IonRow>
                {Array.from({ length: numberOfClues - 1 }, (_, i) => (
                  <ClueItem clue={clues[i]} clueType={clueTypes[i]} tries={tries} icon={icons[i]}/>
                ))}
              </IonRow>
            }
          </IonCardContent>
        </IonCard>
      </IonRow>
  );
};