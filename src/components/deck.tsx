import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Image, ImageBackgroundBase, TouchableOpacity } from 'react-native';

import Card from './card';

interface deckState {
	letters: string,
	cards: any[],
	reshuffle: boolean
}

interface deckProps {}

export default class CardDeck extends Component<deckProps, deckState>{
	public randomLetters: string = '';
	constructor(props: any) {
		super(props)
		this.state = {
			letters: 'ABCDEFGHIJKLMNOPQabcdefghijklmnopq',
			cards: [],
			reshuffle: false,
		}

		this.randomLetters = this.randomizeLetters();
	}
	styles = StyleSheet.create({
			container: {
			borderWidth: 2,
			borderColor: 'yellow',
			borderStyle: 'solid',
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
			}
	})

	randomizeLetters() {
		let randomizedLetters = '';
		for ( var i = 0; i < this.state.letters.length; i++ ) {
			randomizedLetters += this.state.letters.charAt(Math.floor(Math.random() * this.state.letters.length))
		 }
		 return randomizedLetters;
	}

	componentWillReceiveProps = (nextProps: any) => {
		this.setState({ cards: nextProps });  
	  }

	// forceUpdateHandler = () => {
	// 	// this.randomLetters = this.randomizeLetters();
	// 	this.setState({
	// 		cards: []
	// 	});
	// };
	
	render() {
		
		for(let i = 0; i < this.randomLetters.length; i++){
	
			this.state.cards.push(
				<View  key = {i}>
						<Card
							letterDisplay={() => this.randomLetters.charAt(i)}>
						</Card>
				</View>
			)
		}
		
		
		return (
			<View style={this.styles.container}>
				{/* <Button
					title='Reshuffle'
					onPress={() => {this.componentWillReceiveProps([]) }}
				></Button> */}
				{ this.state.cards }
			</View>
		)
}


};