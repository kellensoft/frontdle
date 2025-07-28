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
    <IonRow 
      className="ion-padding ion-justify-content-center"
      style={{          
          backgroundColor: "var(--yesterday-background-color)",
          borderColor:  "var(--yesterday-border-color)",
          borderWidth:  "var(--yesterday-border-width)",
          borderRadius:  "var(--yesterday-border-radius)",
      }}>
      <IonText 
        className="ion-text-center"
        style={{
          fontFamily: 'var(--yesterday-font-family)',
          color: 'var(--yesterday-text-color)', 
          fontSize: '1.1rem',
          textShadow: '1px 1px 2px rgba(0,0,0.5)',
        }}>
        Yesterday's answer was <br />
        <span 
          className="yesterday"
          style={{
            fontFamily: 'var(--yesterday-item-font-family)',
            color: 'var(--yesterday-item-text-color)', 
            fontSize: '2.2rem',
            fontWeight: 'bold',
          }}>
            {yesterdaysAnswer || "Loading..."}
        </span>
      </IonText>
    </IonRow>
  );
};