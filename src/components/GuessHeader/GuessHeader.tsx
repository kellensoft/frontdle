import React, { useMemo } from 'react';
import { 
    IonRow,
    IonCol,
    IonText,
    IonIcon
} from '@ionic/react';
import { helpCircleOutline } from 'ionicons/icons';     
import { useSelector } from 'react-redux';
import { RootState } from '../../universal/store';

import styles from './GuessHeader.module.css';

export const GuessHeader: React.FC = () => {
    const guesses = useSelector((state: RootState) => state.daily.guesses);
    const types = useMemo(() => guesses[0].validation.map(attribute => attribute.type), [guesses]);
    
    return (
        (types.length > 0 && 
            <IonRow className={styles.guessHeader}>
                <IonCol className={styles.guessHeaderItem}>
                    <IonIcon icon={helpCircleOutline} className={styles.guessIcon} />    
                </IonCol>
                {types.map((type, index) => (
                    <IonCol key={index} className={styles.guessHeaderItem}>
                        <IonText key={index} className={styles.guessText}>
                            {type}
                        </IonText>
                    </IonCol>
                ))}
            </IonRow>
        )
    );
};