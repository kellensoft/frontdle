import React from 'react';
import { 
    IonRow,
    IonText
} from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../universal/store';
import { Styled } from '../Styled';

import styles from './YesterdaysAnswer.module.css';

export const YesterdaysAnswer: React.FC = () => {
  const yesterdaysAnswer = useSelector((state: RootState) => state.daily.yesterdaysAnswer);

  return (
    <Styled name="yesterday">
      <IonRow 
        className="ion-padding ion-justify-content-center">
        <IonText 
          className="ion-text-center"
          style={{
            fontSize: '1.1rem',
            textShadow: '1px 1px 2px rgba(0,0,0.5)',
          }}>
          Yesterday's answer was <br />
          <span 
            className="yesterday"
            style={{
              fontSize: '2.2rem',
              fontWeight: 'bold',
            }}>
              {yesterdaysAnswer || "Loading..."}
          </span>
        </IonText>
      </IonRow>
    </Styled>
  );
};