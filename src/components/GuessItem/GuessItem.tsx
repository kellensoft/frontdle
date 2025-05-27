import React from 'react';
import { 
    IonCard, 
    IonContent, 
    IonText,
    IonIcon
} from '@ionic/react';
import {
    arrowDownOutline,
    arrowUpOutline
} from 'ionicons/icons';

import styles from './GuessItem.module.css';

import { Attribute } from '../../universal/types';

export const GuessItem: React.FC<{  
  attribute: Attribute; 
}> = ({ 
  attribute 
}) => {

    const bg: React.CSSProperties = attribute.color.startsWith('http') || attribute.color.startsWith('data:image')
    ? {
        backgroundImage: `url(${attribute.color})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {
        backgroundColor: attribute.color,
    };

    return (
        <IonCard className={styles.guessItem} style={bg}>
            <IonContent className={styles.guessContent}>
                ((attribute.direction === "up" || attribute.direction === "down") &&
                <IonIcon icon={(attribute.direction === "down" ? arrowDownOutline : arrowUpOutline)} className={styles.icon}></IonIcon>
                )
                <IonText>{attribute.value}</IonText>
            </IonContent>
        </IonCard>
    );
};