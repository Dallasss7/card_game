import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';

import CardDeck from './src/components/deck';
// const HelloWorld = require('./src/components/hello-world.tsx');

export default function App() {
	var styles = StyleSheet.create({
		image: {
			flex: 1,
			resizeMode: 'cover',
		  },
		  container: {
			height: '100%',
			width: '100%',
		  }
	});

	function getInitialState() {
        return {
            showCards: false,
        };
    }

    // function toggleCancel() {
        
    // }

  return (
	<View style={styles.container}>
	<ImageBackground source={require('./assets/greenPaper.jpg')} style={styles.image}>
		<CardDeck />
	</ImageBackground>
  </View>
  );
};
