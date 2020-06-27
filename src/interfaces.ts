import { ImageSourcePropType } from 'react-native';
import Card from './components/card';

export interface cardState {
    defaultImage: ImageSourcePropType;
    match?: boolean;
    press: boolean;
    held?: boolean;
    previous?: cardState;
}

export interface cardProps {
    letterDisplay: () => string;
    toggleWinner: (winner) => void;
}

export interface GlobalObj {
    held: string;
    matches: number;
    previous?: Card;
}
