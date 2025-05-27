import React from 'react';
import { 
    IonRow,
    IonText
} from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../universal/store';

import styles from './YesterdaysAnswer.module.css';

export const YesterdaysAnswer: React.FC = () => {
  const yesterdaysAnswer = useSelector((state: RootState) => state.daily.yesterdaysAnswer);

  return (
    <IonRow className="ion-padding ion-justify-content-center">
      <IonText className={`ion-text-center ${styles.yesterdayText}`}>
        Yesterday's answer was <br />
        <span className={styles.yesterday}>{yesterdaysAnswer || "Loading..."}</span>
      </IonText>
    </IonRow>
  );
};