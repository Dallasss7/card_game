import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Confetti from 'react-native-confetti';

export class RNConfetti extends Component {
    _confettiView;

    styles = StyleSheet.create({
        container: {
            flex: 1
        }
    });

    componentDidMount(): void {
        if (this._confettiView) {
            this._confettiView.startConfetti();
        }
    }

    componentWillUnmount(): void {
        if (this._confettiView) {
            this._confettiView.stopConfetti();
        }
    }

    render(): JSX.Element {
        return (
            <View style={this.styles.container}>
                <Confetti
                    confettiCount={200}
                    timeout={5}
                    ref={(node) => (this._confettiView = node)}
                />
            </View>
        );
    }
}
