import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { 
    IonRow,
    IonCard,
    IonButtons,
    IonButton,
    IonIcon,
    IonInput,
    IonList,
    IonItem,
    IonText,
    IonThumbnail
} from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';

import { useLazyQuery } from '@apollo/client';
import { GET_AUTOCOMPLETE, GET_GUESS_RESULT } from '../../graphql/queries';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../universal/store';

import { dailyActions } from '../../universal/slices/daily';

import type { AutocompleteItem } from '../../universal/types';

import styles from './GuessInput.module.css';

export const GuessInput: React.FC = () => {
    const placeholder = useSelector((state: RootState) => state.daily.placeholder);
    const guesses = useSelector((state: RootState) => state.daily.guesses);
    const guessWords = useMemo(() => guesses.map(guess => guess.guess), [guesses]);

    const [input, setInput] = useState<string>('');
    const [results, setResults] = useState<AutocompleteItem[]>([]);

    const { game } = useParams<{ game: string }>();

    const [fetchAutocomplete] = useLazyQuery(GET_AUTOCOMPLETE, {
        onCompleted: (data) => {
            setResults(data.autocomplete || []);
        },
    });

    const dispatch = useDispatch();

    const [fetchGuess] = useLazyQuery(GET_GUESS_RESULT, {
        onCompleted: (data) => {
            const newGuess = data?.guess;
            if (newGuess) {
                dispatch(dailyActions.setGuesses([...guesses, newGuess]));
            }
        },
    });

    const onSelect = (name: string) => {
        setInput("");
        setResults([]);
        fetchGuess({
            variables: {
            game,
            word: name,
            },
        });
    };

    return (
        <>
            <IonRow className="ion-justify-content-center">
                <IonCard className={styles.searchBox}>
                    <IonRow className="ion-padding-start">
                        <IonButtons>
                            <IonInput 
                                className={styles.searchInput}
                                placeholder={placeholder || 'Loading...'} 
                                value={input}
                                autocorrect="off"
                                autocomplete="off"
                                spellCheck={false} 
                                onIonInput={(e) => {
                                    const value = e.detail.value || '';
                                    setInput(value);
                                    if (value.length > 0) {
                                        fetchAutocomplete({ variables: { game, search: value } });
                                    } else {
                                        setResults([]);
                                    }
                                }} 
                            />
                            <IonButton 
                                className={styles.searchButton}
                                onClick={() => {
                                    if (input.trim() === '') return;
                                    if (results.length === 1) {
                                        if (results[0].name.toLowerCase() === input.trim().toLowerCase()) onSelect(input);
                                    }
                                }}>
                                <IonIcon icon={chevronForwardOutline} />
                            </IonButton>
                        </IonButtons>
                    </IonRow>
                </IonCard>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonList className={styles.resultsList}>
                {results.length > 0 && 
                results
                .filter((item) => !guessWords.includes(item.name.toLowerCase()))
                .map((item) => (
                    <IonItem
                        key={item.name}
                        onClick={() => onSelect(item.name)}
                        >
                        <IonThumbnail className={styles.thumbnail}>
                            <img src={item.image} alt={item.name} />
                        </IonThumbnail>  
                        <IonText className={styles.resultsLabel}>{item.name}</IonText>
                    </IonItem>
                ))}
                </IonList>
            </IonRow>
        </>
    );
};