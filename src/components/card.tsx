import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    View,
    Text,
    ImageSourcePropType
} from 'react-native';
import { CardProps, CardState } from '../interfaces';

import { globalObj } from '../global';

export default class Card extends Component<CardProps, CardState> {
    constructor(props: CardProps) {
        super(props);
        this.state = {
            defaultImage: this.checkDeckType(),
            match: false,
            press: false,
            held: undefined
        };

        globalObj.held = '';
        globalObj.matches = 0;
    }
    styles = StyleSheet.create({
        image: {
            height: 80,
            width: 60,
            display: 'flex'
        },
        hidden: {
            height: 80,
            width: 60,
            display: 'flex',
            opacity: 0.0
        },
        imageClick: {
            backgroundColor: '#fff'
        },
        container: {
            // borderColor: 'red',
            // borderStyle: 'solid',
            // borderWidth: 2,
            borderRadius: 5,
            overflow: 'hidden',
            marginTop: '35%'
        },
        letterView: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center'
        },
        letter: {
            color: 'black',
            fontSize: 30
        },
        displayNone: {
            display: 'none'
        }
    });

    letterDisplay(letter: string | number): string | number {
        // alert(letter);
        return letter;
    }

    toggleState(): void {
        this.setState({
            match: !this.state.match
        });
    }

    togglePress(): void {
        //if a card is already held
        if (globalObj.previous === this) {
            alert('You already have this card held.');
            return;
        }

        // if a card is not already held
        else if (!globalObj.previous) {
            // display the card
            this.setState({
                press: true,
                defaultImage: require('../../assets/grayed_out.jpg'),
                previous: this.state
            });

            globalObj.previous = this;
        }
        // if a card is held but its not this
        else {
            // display the card
            this.setState({
                press: true,
                defaultImage: require('../../assets/grayed_out.jpg'),
                previous: this.state
            });

            globalObj.held = this.props.letterDisplay();

            //do they match ?
            if (
                globalObj.previous.props.letterDisplay() ===
                this.props.letterDisplay()
            ) {
                // alert('match');

                // globalObj.held = '';
                setTimeout(() => {
                    this.setState({
                        match: !this.state.match
                    });

                    if (globalObj.previous) {
                        globalObj.previous.setState({
                            match: true
                        });
                    }

                    globalObj.previous = undefined;

                    if (globalObj.matches < 17) {
                        globalObj.matches++;
                        // alert(globalObj.matches);

                        if (globalObj.matches === 17) {
                            this.toggleWinner(true);
                        }
                    }
                }, 700);
            } else {
                // alert('no match');

                setTimeout(() => {
                    this.setState({
                        press: false,
                        defaultImage: this.checkDeckType()
                    });
                    globalObj.held = '';

                    if (globalObj.previous) {
                        globalObj.previous.setState({
                            press: false,
                            defaultImage: this.checkDeckType()
                        });
                        globalObj.previous = undefined;
                    }
                }, 700);
                globalObj.held = '';
            }
        }
    }

    checkDeckType(): ImageSourcePropType {
        return globalObj.deckType === 0
            ? require('../../assets/playingCard.jpg')
            : require('../../assets/playingCard2.jpg');
    }

    toggleWinner(winner: boolean): void {
        this.props.toggleWinner(winner);
    }

    render(): JSX.Element {
        return (
            <TouchableOpacity
                style={this.styles.container}
                onPress={() => {
                    !this.state.match ? this.togglePress() : null;
                }}
            >
                <ImageBackground
                    source={this.state.defaultImage}
                    resizeMode="cover"
                    borderRadius={6}
                    style={
                        !this.state.match
                            ? this.styles.image
                            : this.styles.hidden
                    }
                >
                    {this.state.press && (
                        <View
                            key={this.props.letterDisplay()}
                            style={this.styles.letterView}
                        >
                            <Text style={this.styles.letter}>
                                {this.props.letterDisplay()}
                            </Text>
                        </View>
                    )}
                </ImageBackground>
            </TouchableOpacity>
        );
    }
}
