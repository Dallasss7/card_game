import React, { Component } from 'react'
import { Text, StyleSheet, ImageBackground, View, Button } from 'react-native';

import CardDeck from './src/components/deck';

export default class App extends Component {
	styles = StyleSheet.create({
		image: {
			flex: 1,
			resizeMode: 'cover',
		  },
		  container: {
			flex: 1,
			height: '100%',
			width: '100%',
		  },
		  menu: {
			flex: 1,
			borderStyle: 'solid',
			borderWidth: 2,
			borderColor: 'yellow',
			alignSelf: 'center',
			justifyContent: 'center',
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
			<View style={this.styles.container}>
		<ImageBackground source={require('./assets/greenPaper.jpg')} style={this.styles.image}>
		<View style={this.styles.menu}>
			{this.state.on && (
				<CardDeck />
			)}
				<Button
				title='Show/Hide'
				onPress={() => {this.toggleState()}}
				>
				</Button>
		</View>
			{/* <CardDeck /> */}
		</ImageBackground>
		</View>	
	)
	}




	// return (
	// 	<View style={styles.container}>
	// 	<ImageBackground source={require('./assets/greenPaper.jpg')} style={styles.image}>
	// 	<View style={styles.menu}>
	// 		<Toggle></Toggle>
	// 	</View>
	// 		{/* <CardDeck /> */}
	// 	</ImageBackground>
	// 	</View>
	// 	);

	// if (showCards) {
	// 	return (
	// 		<View style={styles.container}>
	// 		<ImageBackground source={require('./assets/greenPaper.jpg')} style={styles.image}>
	// 			<CardDeck />
	// 		</ImageBackground>
	// 	  </View>
	// 	  );
	// } else {
	// 	return (
	// 		<View style={styles.container}>
	// 			<ImageBackground source={require('./assets/greenPaper.jpg')} style={styles.image}>
	// 				<View style={styles.menu}>
	// 					<Button
	// 					title='entry way'
	// 					onPress={() => {toggleState(showCards)}}
	// 					>HERE
	// 					</Button>
	// 				</View>
	// 			</ImageBackground>
	// 	  	</View>
	// 	);
	// }

};
