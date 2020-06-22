import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default class Card extends Component {
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
		}
	})
    state = {
		selectedImage: '../../assets/playingCard2.jpg',
		defaultImage: require('../../assets/playingCard.jpg'),
		match: false,
		press: false,
	  };

	toggleState() {
		this.setState({
			match: !this.state.match
		})
	}

	togglePress() {
		setTimeout(() => {
			this.setState({
				defaultImage: require('../../assets/grayed_out.jpg')
			})
		}, 200)
		setTimeout(() => {
			this.setState({
				defaultImage: require('../../assets/playingCard.jpg')
			})
		}, 1000)
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
					></ImageBackground>
					)}
			</TouchableOpacity>
		);
	}
}
