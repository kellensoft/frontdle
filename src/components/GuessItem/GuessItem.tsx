import React from 'react';
import { IonCol } from '@ionic/react';
import type { Item } from '../../universal/types';
import { Arrow } from '../Arrow';

import styles from './GuessItem.module.css';

const MIN_TEXT_SIZE = 12;
const MIN_IMG_SIZE = 20;

export const GuessItem: React.FC<{
    index?: number,
    item: Item,
    background?: string,
    useBorder?: boolean,
    tooltip?: string
}> = ({ 
    index,
    item,
    background,
    useBorder,
    tooltip
}) => {
    const { state, content, arrow } = item;

    const hasText = content?.some(c => c.type === 'text');
    const hasImage = content?.some(c => c.type === 'image');

    return (
        <IonCol
            style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
            <div
                className={styles.guessItem}
                style={{
                    fontFamily: 'var(--tile-font-family)',
                    color: 'var(--tile-text-color-'+state+')',
                    borderColor: useBorder ? 'var(--tile-border-color)' : state === 'default' ? 'var(--table-text-color)' : 'color-mix(in srgb, var(--tile-color-'+state+') 70%, white 30%)',
                    borderWidth: 'var(--tile-border-width)',
                    borderStyle: 'solid',
                    borderRadius: 'var(--tile-border-radius)',
                    boxSizing: 'border-box',
                    position: 'relative',
                    width: '4rem',
                    height: '4.25rem',
                    padding: '0.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'contain',
                    backgroundColor: 'var(--tile-color-'+state+')',
                    animationDelay: `${(index ? index : 0) * 0.5}`+'s' 
                }}>
                {(arrow === "up" || arrow === "down") && <Arrow flip={(arrow === "up")} />}
                <div style={{
                    position: 'relative',
                    zIndex: 1
                }}>
                    {hasText && !hasImage &&
                        content
                        .filter(c => c.type === 'text')
                        .map((block, i) =>
                            block.values?.map((line, j) => (
                            <div 
                                key={`${i}-${j}`}
                                style={{
                                }}>
                                    {line}
                            </div>
                            ))
                        )}

                    {hasImage &&
                        content
                        .filter(c => c.type === 'image')
                        .flatMap((block, i) =>
                            block.urls?.map((url, j) => (
                            <>
                                <img
                                    key={`${i}-${j}`}
                                    src={url}
                                    alt=""
                                    style={{
                                        width: MIN_IMG_SIZE,
                                        height: MIN_IMG_SIZE,
                                        objectFit: 'contain',
                                        margin: '1px',
                                    }}
                                />
                                (tooltip ? <div className={styles.tooltip}>{tooltip}</div>)
                            </>
                            )) ?? []
                        )}
                </div>
                {tooltip && <div className={styles.tooltip}>{tooltip}</div>}
            </div>
        </IonCol>
    );
};