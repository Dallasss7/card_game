import React, { Component } from 'react'
import { Text, StyleSheet, ImageBackground, View, Button, BackHandler } from 'react-native';

import CardDeck from './src/components/deck';

export default class App extends Component {
	styles = StyleSheet.create({
		image: {
			flex: 1,
			resizeMode: 'cover',
		  },
		  container: {
			// borderStyle: 'solid',
			// borderWidth: 2,
			// borderColor: 'red',
			flex: 1,
			height: '100%',
			width: '100%',
			alignItems: 'center',
			justifyContent: 'center'
		  },
		  menu: {
			// borderStyle: 'solid',
			// borderWidth: 2,
			// borderColor: 'orange',
			height: '20%',
			alignSelf: 'center',
		  }
	});

	state = {
		on: false
	}

	toggleState() {
		this.setState({
			on: !this.state.on
		})
	}

	render() {
		return (
			<ImageBackground source={require('./assets/greenPaper.jpg')} style={this.styles.image}>
			<View style={this.styles.container}>
				{this.state.on && (
					<CardDeck />
				)}
				<View style= {{
					...this.styles.menu,
					width: this.state.on ? '100%' : '50%',
					justifyContent: this.state.on ? 'flex-end' : 'space-between'
					}}>
					<Button
					title={!this.state.on ? 'Start' : 'Main Menu'}
					onPress={() => {this.toggleState()}}
					>
					</Button>
					{!this.state.on && (
						<Button
						title='Settings'
						onPress={() => {alert('Settings')}}
						>
						</Button>
					)}
					{!this.state.on && (
						<Button
						title='Exit'
						onPress={() => {BackHandler.exitApp()}}
						>
						</Button>
					)}
				</View>
		</View>	
		</ImageBackground>
	)
	}
};
