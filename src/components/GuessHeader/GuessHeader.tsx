import React from 'react';
import { 
    IonRow,
    IonText
} from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../universal/store';

import styles from './GuessHeader.module.css';

export const GuessHeader: React.FC = () => {
    const guesses = useSelector((state: RootState) => state.daily.guesses);
    const types = guesses[0].attributes.map(a => a.type);
    
    return (
        (types.length > 0 && 
            <IonRow className={styles.guessHeader}>
                {types.map((type, index) => (
                    <IonText key={index} className={styles.guessText}>
                        {types}
                    </IonText>
                ))}
            </IonRow>
        )
    );
};