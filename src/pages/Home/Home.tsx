import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import { useSelector } from "react-redux";
import type { RootState } from "../../universal/store";

//import styles from "./Home.module.css";

export const Home: React.FC = () => {
    const games = useSelector((state: RootState) => state.daily.games);

    return (
        <IonPage>
            <IonContent fullscreen>
                <h1>Welcome to the Home Page</h1>
                <p>This is the home page of the application.</p>
                <p>Use the navigation to explore other features.</p>
                <h2>Available Games</h2>
                <ul>
                    {games.map((game, index) => (
                        <li key={index}>
                            {game.icon} - {game.name}
                        </li>
                    ))}
                </ul>
            </IonContent>
        </IonPage>
    );
};