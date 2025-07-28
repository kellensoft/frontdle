import React from 'react';
import { 
    IonCol,
    IonRow,
    IonButtons,
    IonButton,
    IonIcon,
    IonText
} from '@ionic/react';
import {
    settingsOutline,
    languageOutline,
    statsChart,
    flameOutline,
    clipboardOutline,
    helpCircleOutline
} from 'ionicons/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../universal/store';

import styles from './Header.module.css';

export const Header: React.FC = () => {
  const title = useSelector((state: RootState) => state.daily.name);

  return (
    <IonCol>
      <IonRow 
        className="ion-justify-content-center"
        style={{
          fontFamily: 'var(--logo-font-family)',
          color: 'var(--logo-text-color)',
        }}>
        <IonButtons className={`${styles.header} ion-align-items-bottom`}>
          <IonButton className={styles.button}>
            <IonIcon icon={settingsOutline} />
          </IonButton>
          <IonText className={styles.logo}>
            {title || 'Loading...'}
          </IonText>
          <IonButton className={styles.button}>
            <IonIcon icon={languageOutline} />
          </IonButton>
        </IonButtons>
      </IonRow>
      <IonRow 
        className="ion-justify-content-center"
        style={{
          fontFamily: 'var(--logo-font-family)',
          color: 'var(--logo-text-color)',
        }}>
        <IonButtons>
          <IonButton className={styles.button}><IonIcon icon={statsChart} /></IonButton>
          <IonButton className={styles.button}><IonIcon icon={flameOutline} /></IonButton>
          <IonButton className={styles.button}><IonIcon icon={clipboardOutline} /></IonButton>
          <IonButton className={styles.button}><IonIcon icon={helpCircleOutline} /></IonButton>
        </IonButtons>
      </IonRow>
    </IonCol>
  );
};