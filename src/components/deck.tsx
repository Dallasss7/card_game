import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Image, ImageBackgroundBase, TouchableOpacity } from 'react-native';
// import Fireworks from 'react-native-fireworks';

import Card from './card';
import { RNConfetti } from './animations/RNConfetti';

interface deckState {
	letters: string,
	cards: any[],
	reshuffle: boolean,
	winner?: boolean
}

interface deckProps {}

export default class CardDeck extends Component<deckProps, deckState>{
	public randomLetters: string = '';
	constructor(props: any) {
		super(props)
		this.state = {
			letters: 'ABCDEFGHIJKLMNOPQabcdefghijklmnopq',
			cards: [],
			reshuffle: false
		}

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
			width: '90%',
			},
			letter: {
				fontSize: 14,
				color: '#2f354b',
				textAlign: 'center',
			},
			winner: {
				fontSize: 28,
				color: 'white',
				textAlign: 'center',
				flex: 1
			}
	})

	randomizeLetters() {
		var randomizedLetters = this.state.letters.split('').sort(function(){return 0.5-Math.random()}).join('');
		 return randomizedLetters;
	}

	gameWinner = (winner :boolean)  =>{
		alert('WINNER')
		this.setState({
			winner: winner
		})
	}
	
	render() {
		
		for(let i = 0; i < this.randomLetters.length; i++){
	
			this.state.cards.push(
				<View  key = {i}>
						<Card
							letterDisplay={() => this.randomLetters.charAt(i)}
							toggleWinner={this.gameWinner}>
						</Card>
				</View>
			)
		}
		
		{/* <RNConfetti></RNConfetti> */}
		return (this.state.winner ?
			<View style={this.styles.container}>
				{ this.state.cards }
			</View>
			:
			<View style={this.styles.container}>
				<RNConfetti>
					<Text style={this.styles.winner}>WINNER</Text>
				</RNConfetti>
			</View>
		)
}


};