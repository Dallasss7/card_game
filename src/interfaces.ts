import { ImageSourcePropType } from 'react-native';
import Card from './components/card';

export interface CardState {
    defaultImage: ImageSourcePropType;
    match?: boolean;
    press: boolean;
    held?: boolean;
    previous?: CardState;
}

export interface CardProps {
    letterDisplay: () => string;
    toggleWinner: (winner) => void;
}

export interface DeckState {
    letters: string;
    cards: JSX.Element[];
    reshuffle: boolean;
    winner?: boolean;
}

export interface GlobalObj {
    held: string;
    matches: number;
    difficulty?: boolean;
    previous?: Card;
    deckType?: number;
}
