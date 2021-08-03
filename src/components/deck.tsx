import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Card from './card';
import { RNConfetti } from './animations/RNConfetti';
import { DeckState } from '../interfaces';
import { globalObj } from '../global';

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

export default function CardDeck(): JSX.Element {
    let randomLetters = '';
    const isDeckTypeDefault = () => {
        return globalObj.deckType === 0;
    };
    const randomizeLetters = () => {
        let randomizedLetters = '';
        if (isDeckTypeDefault() && deckState.letters) {
            randomizedLetters = deckState.letters
                .split('')
                .sort(function () {
                    return 0.5 - Math.random();
                })
                .join('');
        }
        return randomizedLetters;
    };

    const [deckState, setDeckState] = useState<DeckState>({
        cards: [],
        letters: isDeckTypeDefault()
            ? 'abcdefghijklmnopqabcdefghijklmnopq'
            : '',
        numbers: !isDeckTypeDefault()
            ? [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15,
                  16,
                  17,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15,
                  16,
                  17
              ]
            : [-1],
        reshuffle: false,
        winner: false
    });

    isDeckTypeDefault() ? (randomLetters = randomizeLetters()) : '';

    const styles = StyleSheet.create({
        container: {
            // borderWidth: 2,
            // borderColor: 'yellow',
            // borderStyle: 'solid',
            paddingTop: '10%',
            paddingBottom: '10%',
            flex: 0.9,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '90%'
        },
        winner_container: {
            paddingTop: '10%',
            paddingBottom: '10%',
            flex: 0.9,
            alignSelf: 'center',
            justifyContent: 'center',
            width: '90%'
        },
        letter: {
            fontSize: 14,
            color: '#2f354b'
        },
        winner: {
            fontSize: 28,
            color: 'white',
            textAlign: 'center'
        }
    });

    const gameWinner = (winner: boolean): void => {
        setDeckState({
            ...deckState,
            winner: winner
        });
    };

    // {
    if (isDeckTypeDefault()) {
        for (let i = 0; i < randomLetters.length; i++) {
            deckState.cards.push(
                <View key={i}>
                    <Card
                        letterDisplay={() => randomLetters.charAt(i)}
                        toggleWinner={gameWinner}
                    ></Card>
                </View>
            );
        }
    } else {
        if (deckState.numbers) {
            deckState.numbers.sort(() => 0.5 - Math.random());
        }
        for (let i = 0; i < deckState.numbers.length; i++) {
            deckState.cards.push(
                <View key={i}>
                    <Card
                        letterDisplay={() => deckState.numbers[i]}
                        toggleWinner={gameWinner}
                    ></Card>
                </View>
            );
        }
    }

    return !deckState.winner ? (
        <View style={styles.container}>{deckState.cards}</View>
    ) : (
        <View style={styles.winner_container}>
            <RNConfetti />
            <Text style={styles.winner}>WINNER!</Text>
        </View>
    );
    // }
}
