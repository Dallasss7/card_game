import React, { Component } from 'react';
import { Button, View, ImageBackground, StyleSheet, Image, ImageBackgroundBase } from 'react-native';

import Card from './card';

	const cardDeck = () => {
		var styles = StyleSheet.create({
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