import React from 'react';

export const Arrow: React.FC<{
    flip?: boolean;
}> = ({ 
    flip,
}) => {
    return (
      <div 
        style={{
            position: 'absolute',
        }}>
            {( flip ? 
                <svg width="60" height="65" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M 0.625,11.844 C 19.375,11.844 19.375,11.7617 19.375,11.7617 L 10.3275,20.0 Z M 4.0,1.5 H 16.1352 V 11.845 H 4.0 Z"
                        fill="#000000"
                        fillOpacity="0.4"
                        stroke="none"
                    />
                </svg>
            :
                <svg width="60" height="65" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M 0.625,9.656 C 19.375,9.656 19.375,9.7383 19.375,9.7383 L 10.3275,1.5 Z M 4.0,20.0 H 16.1352 V 9.655 H 4.0 Z"
                        fill="#000000"
                        fillOpacity="0.4"
                        stroke="none"
                    />
                </svg>
            )}
      </div>
    );
}