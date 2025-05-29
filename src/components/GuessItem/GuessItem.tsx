import React from 'react';
import { 
    IonCard, 
    IonText,
    IonIcon
} from '@ionic/react';
import {
    arrowDownOutline,
    arrowUpOutline,
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
    const backgroundColor = attribute?.color === "green" 
    ? "var(--ion-color-success-shade)" 
    : attribute?.color === "yellow" 
    ? "var(--ion-color-warning-shade)" 
    : "var(--ion-color-danger)";


    const bg: React.CSSProperties = image
    ? {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    } : (attribute && attribute.color) ? {
        backgroundColor: backgroundColor,
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