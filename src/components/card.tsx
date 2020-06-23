import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, ImageBackground, View, Text, ImageSourcePropType } from 'react-native';

interface cardState {
	defaultImage: ImageSourcePropType,
	match: boolean,
	press: boolean,
}

interface cardProps {
	letterDisplay: any
}

export default class Card extends Component<cardProps, cardState> {
	constructor(props: any) {
		super(props);
		this.state = {
			defaultImage: require('../../assets/playingCard.jpg'),
			match: false,
			press: false,
		  };
	}
	styles = StyleSheet.create({
		image: {
			height: 80,
			width: 60,
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
		}
	})

	  letterDisplay(letter: string) {
		return letter;
	  }

	toggleState() {
		this.setState({
			match: !this.state.match
		})
	}

	togglePress() {
		setTimeout(() => {
			this.setState({
				press: !this.state.press,
				defaultImage: require('../../assets/grayed_out.jpg')
			})
		}, 500)
		setTimeout(() => {
			this.setState({
				defaultImage: require('../../assets/playingCard.jpg'),
				press: !this.state.press
			})
		}, 1500)
	}

	render() {
		return (
			<TouchableOpacity 
				style={this.styles.container} 
				onPress={() => {this.togglePress()}}>
					{!this.state.match && (
						<ImageBackground
						source={this.state.defaultImage}
						resizeMode= 'cover'
						borderRadius={6}
						style={this.styles.image}
					>
						{this.state.press && (
							<View style={this.styles.letterView}>
								<Text style={this.styles.letter}>{this.props.letterDisplay()}</Text>
							</View>
						)}
					</ImageBackground>
					)}
			</TouchableOpacity>
		);
	}
}
