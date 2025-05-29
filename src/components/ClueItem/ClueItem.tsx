import React from 'react';
import {
    IonCol,
    IonButtons,
    IonButton,
    IonIcon,
    IonText
} from '@ionic/react';
import { ClueType } from '../../universal/types';

import styles from './ClueItem.module.css';

export const ClueItem: React.FC<{ 
  clue: string, 
  clueType: ClueType, 
  tries: number,
  requiredTries?: number,
  icon: string 
}> = ({ 
  //clue, 
  clueType, 
  tries,
  requiredTries = 0,
  icon
}) => {
  return (
    <IonCol>
      <IonButtons className="ion-justify-content-center">
        <IonButton className={styles.button} disabled={tries < requiredTries}>
          <IonIcon icon={icon} style={{ transform: 'rotate(90deg)' }} />
        </IonButton>
      </IonButtons>
      { 
        tries < 15 &&
        <IonText className="ion-text-center">
          Clue: {clueType.name || "Loading..."}<br />
          in {requiredTries - tries} tries
        </IonText>
      }
    </IonCol>
  );
};
