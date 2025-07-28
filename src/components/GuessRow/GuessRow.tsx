import React from 'react';
import { useSelector } from 'react-redux';
import { 
    IonRow 
} from '@ionic/react';

import type { RootState } from '../../universal/store';
import type { Guess, Item, ContentBlock } from '../../universal/types';

import { GuessItem } from '../GuessItem';

import styles from './GuessRow.module.css';

export const GuessRow: React.FC<{
    guess: Guess
}> = ({
    guess
}) => {
    const useBorder = typeof(useSelector((state: RootState) => state.daily.tileBorderColor))==='string';

    const labelContent: ContentBlock = {
        type: 'image',
        values: [guess.guess],
        urls: []
    }
    const label: Item = {
        state: 'default',
        content: [labelContent]
    }
    const items: Item[] = guess.validation || [];
    return (
        <IonRow className={styles.guessRow}>
            <GuessItem background={guess.image} item={label} useBorder={useBorder} />
            {items.map((item, index) => (
                <GuessItem key={index} item={item} useBorder={useBorder} />
            ))}
        </IonRow>
    );
};