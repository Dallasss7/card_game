import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    View,
    Button,
    BackHandler,
	TouchableOpacity,
	Text,
	ActivityIndicator
} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';

import CardDeck from './src/components/deck';

export default class App extends Component {
    styles = StyleSheet.create({
        image: {
            flex: 1,
            resizeMode: 'cover'
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
			width: '50%',
            height: '20%',
			alignSelf: 'center',
			justifyContent: 'space-between'
		},
		icon: {
            // borderStyle: 'solid',
            // borderWidth: 2,
			// borderColor: 'orange',
			alignItems: 'center',

		},
		icon_text: {
			color: 'white'
		},
		drawer: {
            // borderStyle: 'solid',
            // borderWidth: 2,
			// borderColor: 'orange',
			borderRadius: 25,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            flexWrap: 'nowrap',
			width: '90%',
			margin: 'auto'
		},
		loading: {
            flex: 1,
            height: '00%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
		}
    });

    state = {
		on: false,
		open: false,
		loading: false,
    };

    toggleState(): void {
        this.setState({
            on: !this.state.on
        });
	}
	
	toggleLoading(): void {
		this.setState({
			loading: !this.state.loading
		});
	}

	handleClick():void {
		this.setState({
			open: !this.state.open
		});
	}

	// componentDidMount() {
	// 	BackHandler.addEventListener('hardwareBackPress',() => {this.setState({on: false}); return false});
	// }

	// onBackPress(): boolean{
	// 	this.setState({
	// 		on: false
	// 	})
	// 	return false; 
	// }

    render(): JSX.Element {
        return (
            <ImageBackground
                source={require('./assets/greenPaper.jpg')}
                style={this.styles.image}
            >
                <View style={this.styles.container}>
					{this.state.loading ? 
						<ActivityIndicator style={this.styles.loading} size="large" color="#0000ff" />
					: 
					this.state.on && <CardDeck />
					}
                    <View style={this.styles.menu}>
						{!this.state.on && (
							<Button
								title={'Start'}
								onPress={() => {
									this.toggleState();
								}}
							></Button>
						)}
						{!this.state.on && (
                            <Button
                                title="Settings"
                                onPress={() => {
                                    alert('Settings');
                                }}
                            ></Button>
                        )}
                        {!this.state.on && (
                            <Button
                                title="Exit"
                                onPress={() => {
                                    BackHandler.exitApp();
                                }}
                            ></Button>
                        )}
                    </View>
					{this.state.on && (
						<View style={this.styles.drawer}>
							<View>
								<TouchableOpacity onPress={() => {
									this.toggleLoading();
									setTimeout(() => {
									this.toggleLoading()}, 700)
									}} style={this.styles.icon}>
									<IconEntypo name="shuffle" size={30} color="#4F8EF7" />
									<Text style={this.styles.icon_text}>SHUFFLE</Text>
								</TouchableOpacity>
							</View>
							<View>
								<TouchableOpacity onPress={() => alert('Settings')} style={this.styles.icon}>
									<IconFeather name="settings" size={30} color="#4F8EF7" />
									<Text style={this.styles.icon_text}>SETTINGS</Text>
								</TouchableOpacity>
							</View>
							<View>
								<TouchableOpacity onPress={() => this.toggleState()} style={this.styles.icon}>
									<IconEntypo name="menu" size={30} color="#4F8EF7" />
									<Text style={this.styles.icon_text}>MAIN MENU</Text>
								</TouchableOpacity>
							</View>
						</View>
					)}
                </View>
            </ImageBackground>
        );
    }
}
