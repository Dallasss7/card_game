import React from 'react';
import { TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const card = () => {
	const styles = StyleSheet.create({
		image: {
			height: 80,
			width: 60,
		},
		container: {
			borderColor: 'red',
			borderStyle: 'solid',
			borderWidth: 2,
			borderRadius: 5,
			overflow: 'hidden',
			marginTop: '35%'
		}
	})

	function alertCard() {
		alert('You touched a thingy');
	}

	return (
	<TouchableOpacity style={styles.container} onPress={alertCard}>
		   <ImageBackground
          source={require('../../assets/playingCard.jpg')}
		  resizeMode= 'cover'
		  borderRadius={6}
          style={styles.image}
        ></ImageBackground>
	</TouchableOpacity>
	);
}

export default card;