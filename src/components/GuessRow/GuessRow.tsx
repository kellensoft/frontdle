import React from 'react';
import { 
    IonRow 
} from '@ionic/react';

import { Guess, Attribute } from '../../universal/types';

import { GuessItem } from '../GuessItem';

import styles from './GuessRow.module.css';

export const GuessRow: React.FC<{
    guess: Guess
}> = ({
    guess
}) => {
    const attributes: Attribute[] = guess.validation || [];
    return (
        <IonRow className={styles.guessRow}>
            <GuessItem image={guess.image} text={guess.guess} />
            {attributes.map((attribute, index) => (
                <GuessItem key={index} attribute={attribute} />
            ))}
        </IonRow>
    );
};