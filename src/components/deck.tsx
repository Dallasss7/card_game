import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Card from './card';
import { RNConfetti } from './animations/RNConfetti';
import { DeckState } from '../interfaces';
import { globalObj } from '../global';

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

export default class CardDeck extends Component<unknown, DeckState> {
    public randomLetters = '';
    constructor(props: unknown) {
        super(props);
        this.state = {
            cards: [],
            letters: this.isDeckTypeDefault()
                ? 'abcdefghijklmnopqabcdefghijklmnopq'
                : '',
            numbers: !this.isDeckTypeDefault()
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
            reshuffle: false
        };

        this.isDeckTypeDefault()
            ? (this.randomLetters = this.randomizeLetters())
            : '';
    }
    styles = StyleSheet.create({
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

    randomizeLetters(): string {
        let randomizedLetters = '';
        if (this.isDeckTypeDefault() && this.state.letters) {
            randomizedLetters = this.state.letters
                .split('')
                .sort(function () {
                    return 0.5 - Math.random();
                })
                .join('');
        }
        return randomizedLetters;
    }

    gameWinner = (winner: boolean): void => {
        this.setState({
            winner: winner
        });
    };

    isDeckTypeDefault(): boolean {
        return globalObj.deckType === 0;
    }

    render(): JSX.Element {
        if (this.isDeckTypeDefault()) {
            for (let i = 0; i < this.randomLetters.length; i++) {
                this.state.cards.push(
                    <View key={i}>
                        <Card
                            letterDisplay={() => this.randomLetters.charAt(i)}
                            toggleWinner={this.gameWinner}
                        ></Card>
                    </View>
                );
            }
        } else {
            if (this.state.numbers) {
                this.state.numbers.sort(() => 0.5 - Math.random());
            }
            for (let i = 0; i < this.state.numbers.length; i++) {
                this.state.cards.push(
                    <View key={i}>
                        <Card
                            letterDisplay={() => this.state.numbers[i]}
                            toggleWinner={this.gameWinner}
                        ></Card>
                    </View>
                );
            }
        }

        return !this.state.winner ? (
            <View style={this.styles.container}>{this.state.cards}</View>
        ) : (
            <View style={this.styles.winner_container}>
                <RNConfetti />
                <Text style={this.styles.winner}>WINNER!</Text>
            </View>
        );
    }
}
