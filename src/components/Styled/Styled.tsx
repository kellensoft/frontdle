import React, { type ReactNode } from 'react';
import { IonCol, IonCard } from '@ionic/react';

interface StyledProps {
    name: string;
}

export const Styled: React.FC<React.PropsWithChildren<StyledProps>> = ({
    name,
    children
}) => {
    const style = {
        fontFamily: `var(--${name}-font-family)`,
        fontSize: `var(--${name}-font-size)`,
        fontWeight: `var(--${name}-font-weight)`,
        color: `var(--${name}-text-color)`,
    }
    const family: ReactNode = React.Children.map(children, (child, idx) => {
        return <div style={style} key={idx}>{child}</div>
    });

    return (
        <IonCol>
            <IonCard
                style={{
                    width: 'fit-content',
                    minWidth: '25rem',
                    backgroundColor: `var(--${name}-background-color)`,
                    backgroundImage: `var(--${name}-background-image)`,
                    backgroundSize: `var(--${name}-background-size)`,
                    backgroundRepeat: `var(--${name}-background-repeat)`,
                    backgroundPosition: `var(--${name}-background-position)`,
                    borderColor: `var(--${name}-border-color)`,
                    borderWidth: `var(--${name}-border-width, 0)`,
                    borderStyle: 'solid',
                    borderRadius: `var(--${name}-border-radius)`,
                    boxShadow: `var(--${name}-box-shadow)`,
                    fontFamily: `var(--${name}-font-family)`,
                    fontSize: `var(--${name}-font-size)`,
                    fontWeight: `var(--${name}-font-weight)`,
                    color: `var(--${name}-text-color)`,
                    padding: `var(--${name}-padding, 5px)`,
                    margin: `var(--${name}-margin, auto)`,
                }}>
                {family}
            </IonCard>
        </IonCol>
    );
};