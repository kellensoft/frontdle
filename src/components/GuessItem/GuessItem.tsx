import React from 'react';
import { 
    IonCard, 
    IonContent, 
    IonText,
    IonIcon
} from '@ionic/react';
import {
    arrowDownOutline,
    arrowUpOutline,
    at
} from 'ionicons/icons';

import styles from './GuessItem.module.css';

import { Attribute } from '../../universal/types';

export const GuessItem: React.FC<{
    text?: string;
    image?: string;
    attribute?: Attribute; 
}> = ({ 
    //text,
    image, 
    attribute 
}) => {
    const bg: React.CSSProperties = image
    ? {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    } : (attribute && attribute.color) ? {
        backgroundColor: attribute.color,
    } : {};

    return (
        <IonCard className={styles.guessItem} style={bg}>
            { attribute &&
              ( attribute.direction === "up" || attribute.direction === "down") && 
                <IonIcon icon={(attribute.direction === "down" ? arrowDownOutline : arrowUpOutline)} className={styles.guessIcon}>
                </IonIcon>}
            { attribute &&     
                <IonText className={styles.guessText}>
                    {attribute.value}
                </IonText>
            }
        </IonCard>
    );
};