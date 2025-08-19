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
  planetOutline, 
  informationCircleOutline, 
  heartOutline 
} from 'ionicons/icons';
import { Styled } from '../Styled';

import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const aboutUrl = import.meta.env.VITE_APP_ABOUT_URL || '';
  const supportUrl = import.meta.env.VITE_APP_SUPPORT_URL || '';
  const privacyUrl = import.meta.env.VITE_APP_PRIVACY_URL || '';

  return (
    <Styled name='about'>
      <IonRow className="ion-padding ion-justify-content-center">
        <IonButtons className={styles.footerIcons}>
          <IonButton className={styles.button} onClick={() => window.location.href = '/'}>
            <IonIcon icon={planetOutline} />
            </IonButton>
          <IonButton className={styles.button} onClick={() => window.location.href = aboutUrl}>
            <IonIcon icon={informationCircleOutline} />
            </IonButton>
          <IonButton className={styles.button} onClick={() => window.location.href = supportUrl}>
            <IonIcon icon={heartOutline} />
            </IonButton>
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
          <a href={privacyUrl} className={styles.footerPrivacyLink}>Privacy Policy</a>
        </IonText>
      </IonRow>
    </Styled>
  );
};