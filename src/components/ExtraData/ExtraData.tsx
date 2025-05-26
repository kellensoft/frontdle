import React from 'react';
import { IonCol } from '@ionic/react';

import { PreviousAnswer } from '../PreviousAnswer';
import { GamesAtlas } from '../GamesAtlas';

//import styles from './ExtraData.module.css';

export const ExtraData: React.FC = () => {
  return (
    <IonCol>
      <PreviousAnswer />
      <GamesAtlas />
    </IonCol>
  );
};