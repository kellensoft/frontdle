import React from 'react';
import { 
    IonRow 
} from '@ionic/react';

import { Attribute } from '../../universal/types';

import { GuessItem } from '../GuessItem';

import styles from './GuessRow.module.css';

export const GuessRow: React.FC<{
    attributes: Attribute[];
}> = ({
    attributes
}) => {
    return (
        <IonRow className={styles.guessRow}>
            {attributes.map((attribute, index) => (
                <GuessItem key={index} attribute={attribute} />
            ))}
        </IonRow>
    );
};