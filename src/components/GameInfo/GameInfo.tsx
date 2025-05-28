import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
    IonCol,
    IonRow,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonInput
} from '@ionic/react';
import { 
    removeOutline, 
    reorderTwoOutline, 
    reorderThreeOutline, 
    chevronForwardOutline 
} from 'ionicons/icons';
import { useLazyQuery } from '@apollo/client';
import { GET_AUTOCOMPLETE } from '../../graphql/queries';
import { useSelector } from 'react-redux';
import { RootState } from '../../universal/store';

import { ClueItem } from '../ClueItem';

import styles from './GameInfo.module.css';

export const GameInfo: React.FC = () => {
  const header = useSelector((state: RootState) => state.daily.header);
  const body = useSelector((state: RootState) => state.daily.body);
  const placeholder = useSelector((state: RootState) => state.daily.placeholder);

  const clueTypes = useSelector((state: RootState) => state.daily.clueTypes);
  const clues = useSelector((state: RootState) => state.daily.clues);
  const icons = [removeOutline, reorderTwoOutline, reorderThreeOutline];
  const numberOfClues = Math.min(clues.length, clueTypes.length, icons.length);
  
  const tries = useSelector((state: RootState) => state.daily.guesses.length);

  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);

  const { game } = useParams<{ game: string }>();

  const [fetchAutocomplete] = useLazyQuery(GET_AUTOCOMPLETE, {
    onCompleted: (data) => {
      setResults(data.autocomplete || []);
      console.log("data: ", data);
    },
  });

  return (
    <IonCol>
      <IonRow className="ion-justify-content-center ">
        <IonCard className={`ion-padding ion-no-margin ${styles.card}`}>
          <IonCardHeader>
            <IonCardTitle className="instruction-header">{header || 'Loading...'}</IonCardTitle>
            <IonCardSubtitle className="instruction-text">{body || 'Loading...'}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-center">
            { tries > 1 &&
              <IonRow>
                {Array.from({ length: numberOfClues - 1 }, (_, i) => (
                  <ClueItem clue={clues[i]} clueType={clueTypes[i]} tries={tries} icon={icons[i]}/>
                ))}
              </IonRow>
            }
          </IonCardContent>
        </IonCard>
      </IonRow>
      <IonRow className="ion-justify-content-center">
        <IonCard className={styles.searchBox}>
          <IonRow className="ion-padding-start">
            <IonButtons>
              <IonInput 
                placeholder={placeholder || 'Loading...'} 
                value={input} 
                onIonInput={(e) => {
                  const value = e.detail.value || '';
                  setInput(value);
                  if (value.length > 0) {
                    fetchAutocomplete({ variables: { game, search: value } });
                  } else {
                    setResults([]);
                  }
                }} 
                clearInput
              />
              <IonButton className={styles.button}><IonIcon icon={chevronForwardOutline} /></IonButton>
            </IonButtons>
          </IonRow>
        </IonCard>
      </IonRow>
    </IonCol>
  );
};