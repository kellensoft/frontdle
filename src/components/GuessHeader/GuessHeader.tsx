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
    const attributes = useSelector((state: RootState) => state.daily.attributes);
    
    return (
        (attributes.length > 0 && 
            <IonRow className={styles.guessHeader}>
                <IonCol 
                    className={styles.guessHeaderItem} 
                    style={{
                        borderBottom: '0.2rem solid var(--table-text-color)',
                        boxShadow: '0 2px 1px -1px rgba(0, 0, 0, 0.5)',
                    }}>
                    <IonIcon icon={helpCircleOutline} className={styles.guessIcon} />    
                </IonCol>
                {attributes.map((type, index) => (
                    <IonCol 
                        key={index} 
                        className={styles.guessHeaderItem}
                        style={{
                            borderBottom: '0.2rem solid var(--table-text-color)',
                            textShadow: '1px 1px 2px rgba(0,0,0.5)',
                            boxShadow: '0 2px 1px -1px rgba(0, 0, 0, 0.5)',
                        }}>
                        <IonText key={index} className={styles.guessText}>
                            {type}
                        </IonText>
                    </IonCol>
                ))}
            </IonRow>
        )
    );
};