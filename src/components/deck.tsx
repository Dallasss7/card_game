import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import Card from './card';
import { RNConfetti } from './animations/RNConfetti';

interface deckState {
    letters: string;
    cards: JSX.Element[];
    reshuffle: boolean;
    winner?: boolean;
}

export default class CardDeck extends Component<unknown, deckState> {
    public randomLetters = '';
    constructor(props: unknown) {
        super(props);
        this.state = {
            letters: 'ABCDEFGHIJKLMNOPQabcdefghijklmnopq',
            cards: [],
            reshuffle: false
        };

        this.randomLetters = this.randomizeLetters();
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
            color: '#2f354b',
        },
        winner: {
            fontSize: 28,
            color: 'white',
            textAlign: 'center',
        }
    });

    randomizeLetters(): string {
        const randomizedLetters = this.state.letters
            .split('')
            .sort(function () {
                return 0.5-Math.random();
            })
            .join('');
        return randomizedLetters;
    }

    gameWinner = (winner: boolean): void => {
        alert('WINNER');
        this.setState({
            winner: winner
        });
    };

    render(): JSX.Element {
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
