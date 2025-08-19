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
import { Styled } from '../Styled';

import styles from './Header.module.css';

export const Header: React.FC = () => {
  const title = useSelector((state: RootState) => state.daily.name);
  const headerColor = useSelector((state: RootState) => state.daily.sections.header.textColor);
  return (
    <Styled name="header">
      <IonRow 
        className="ion-justify-content-center header">
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
          fontFamily: 'var(--menu-font-family)',
          color: 'var(--menu-text-color)',
        }}>
        <IonButtons>
          <IonButton className={styles.button}><IonIcon icon={statsChart} style={{color: 'var(--menu-text-color)'}} /></IonButton>
          <IonButton className={styles.button}><IonIcon icon={flameOutline} style={{color: 'var(--menu-text-color)'}} /></IonButton>
          <IonButton className={styles.button}><IonIcon icon={clipboardOutline} style={{color: 'var(--menu-text-color)'}} /></IonButton>
          <IonButton className={styles.button}><IonIcon icon={helpCircleOutline} style={{color: 'var(--menu-text-color)'}} /></IonButton>
        </IonButtons>
      </IonRow>
    </Styled>
  );
};