import React from 'react';
import { IonGrid } from '@ionic/react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../universal/store';

import { GuessHeader } from '../GuessHeader';
import { GuessRow } from '../GuessRow';

import styles from './GuessTable.module.css';

export const GuessTable: React.FC = () => {
    const guesses = useSelector((state: RootState) => state.daily.guesses);
    
    return (
        (guesses.length > 0 &&
        <IonGrid className={styles.guessTable}>
            <GuessHeader />
            {guesses.map((guess, index) => (
                <GuessRow key={index} guess={guess} />
            ))}
        </IonGrid>
        )
    );
};
