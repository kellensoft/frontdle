import React from 'react';
import { 
    IonRow,
    IonText
} from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../universal/store';

import styles from './PreviousAnswer.module.css';

export const PreviousAnswer: React.FC = () => {
  const yesterday = useSelector((state: RootState) => state.daily.yesterday);

  return (
    <IonRow className="ion-padding ion-justify-content-center">
      <IonText className={`ion-text-center ${styles.yesterdayText}`}>
        Yesterday's answer was <br />
        <span className={styles.yesterday}>{yesterday || "Loading..."}</span>
      </IonText>
    </IonRow>
  );
};