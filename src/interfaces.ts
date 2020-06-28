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
    letterDisplay: () => string | number;
    toggleWinner: (winner) => void;
}

export interface DeckState {
    letters: string;
    numbers: number[];
    cards: JSX.Element[];
    reshuffle: boolean;
    winner?: boolean;
}

export interface GlobalObj {
    held: string | number;
    matches: number;
    difficulty?: boolean;
    previous?: Card;
    deckType?: number;
}
