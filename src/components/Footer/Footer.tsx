import React from 'react';
import { IonRow } from '@ionic/react';
import { 
  IonCol, 
  IonText, 
  IonButtons, 
  IonButton, 
  IonIcon 
} from '@ionic/react';
import { 
  closeCircleOutline, 
  informationCircleOutline, 
  heartOutline 
} from 'ionicons/icons';

import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <IonCol>
      <IonRow className="ion-padding ion-justify-content-center">
        <IonButtons className={styles.footerIcons}>
          <IonButton className={styles.button}><IonIcon icon={closeCircleOutline} /></IonButton>
          <IonButton className={styles.button}><IonIcon icon={informationCircleOutline} /></IonButton>
          <IonButton className={styles.button}><IonIcon icon={heartOutline} /></IonButton>
        </IonButtons>
      </IonRow>
      <IonRow className="ion-justify-content-center">
        <IonText className={`${styles.footerNote} ion-text-center`}>
          {window.location.hostname} — {new Date().getFullYear()}<br />
          This project is not endorsed or sponsored.<br />
          Inspired by Pokédle.
        </IonText>
      </IonRow>
      <IonRow className="ion-justify-content-center">
        <IonText className={`${styles.footerPrivacy} ion-text-center`}>
          <a href="/privacy">Privacy Policy</a>
        </IonText>
      </IonRow>
    </IonCol>
  );
};