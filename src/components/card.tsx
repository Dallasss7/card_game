import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

const card = () => {
	const styles = StyleSheet.create({
		image: {
			// padding: 50
			height: 80,
			width: 60
		},
		container: {
			// borderColor: 'red',
			// borderStyle: 'solid',
			// borderWidth: 2,
			margin: '1%',
			paddingTop: '35%',
			// height: 10,
			// width: 10
			// backgroundColor: 'red'
			// backgroundColor: "powderblue",
		}
	})

	return (
	<View style={styles.container}>
		   <ImageBackground
          source={require('../../assets/playingCard.jpg')}
          resizeMode= 'cover'
          style={styles.image}
        ></ImageBackground>
		{/* <ImageBackground source={require('../../assets/playingCard.jpg')} style={styles.image} /> */}
	</View>
	);
}

export default card;