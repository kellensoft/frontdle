import React from 'react';
import { IonApp, setupIonicReact, IonPage, IonContent } from '@ionic/react';
import { useSelector } from 'react-redux';
import type { RootState } from './universal/store';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

import { Header } from './components/Header';
import { GameInfo } from './components/GameInfo';
import { Spacer } from './components/Spacer';
import { GuessTable } from './components/GuessTable';
import { ExtraData } from './components/ExtraData';
import { Footer } from './components/Footer';

import './App.css';

setupIonicReact();

const App: React.FC = () => {

  const bgUrl = useSelector((state: RootState) => state.settings.bgUrl);
  const fgColor = useSelector((state: RootState) => state.settings.fgColor);
  const borderColor = useSelector((state: RootState) => state.settings.borderColor);
  const textColor = useSelector((state: RootState) => state.settings.textColor);

  document.body.style.setProperty('--ion-color-bg', bgUrl ? `url(${bgUrl})` : 'var(--ion-color-primary)');
  document.body.style.setProperty('--ion-color-fg', fgColor || '#3d3d3d');
  document.body.style.setProperty('--ion-color-border', borderColor || '#2b2b2b');
  document.body.style.setProperty('--ion-color-text', textColor || '#d6d6d6');

  return (
    <IonApp>
      <IonPage>
        <IonContent fullscreen>
          <Header />
          <GameInfo />
          <Spacer />
          <GuessTable />
          <Spacer />
          <ExtraData />
          <Footer />
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default App;
