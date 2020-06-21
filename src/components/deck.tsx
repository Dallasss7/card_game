import React, { Component } from 'react';
import { Button, View, ImageBackground, StyleSheet, Image, ImageBackgroundBase } from 'react-native';

import Card from './card';

	const cardDeck = () => {
		var styles = StyleSheet.create({
			  container: {
				paddingTop: 45,
				paddingBottom: 45,
				borderWidth: 2,
				borderColor: 'yellow',
				borderStyle: 'solid',
				flex: 1,
				justifyContent: 'space-evenly',
				flexDirection: 'row',
				alignItems: 'flex-start',
				flexWrap: 'wrap'
				
			  }
		})

		
		var cards = [];
	
		for(let i = 0; i < 30; i++){
	
			cards.push(
				<View  key = {i}>
					<Card />
				</View>
			)
		}
		
		return (
			<View style={styles.container}>
				{ cards }
			</View>
		)

		// return (
		//   <View style={styles.container}>
		// 		<Card />
		//   </View>
		// );
	  };
	  
	  
	  export default cardDeck;