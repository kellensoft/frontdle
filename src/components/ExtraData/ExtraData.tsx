import React from 'react';
import { IonCol } from '@ionic/react';

import { YesterdaysAnswer } from '../YesterdaysAnswer';
import { GamesAtlas } from '../GamesAtlas';

//import styles from './ExtraData.module.css';

export const ExtraData: React.FC = () => {
  return (
    <IonCol>
      <YesterdaysAnswer />
      <GamesAtlas />
    </IonCol>
  );
};