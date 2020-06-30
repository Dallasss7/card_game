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
import IconAntDesign from 'react-native-vector-icons/AntDesign';
// import IconFeather from 'react-native-vector-icons/Feather';

import CardDeck from './src/components/deck';
import Settings from './src/components/settings';
import { AppState } from './src/interfaces';

export default class App extends Component<null, AppState> {
    constructor(props: null) {
        super(props);

        this.state = {
            play: false,
            openSettings: false,
            loading: false
        };
    }

    styles = StyleSheet.create({
        image: {
            flex: 1
        },
        hide: {
            display: 'none'
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
            // borderColor: 'white',
            width: '50%',
            height: '20%',
            alignSelf: 'center',
            justifyContent: 'space-between'
        },
        icon: {
            // borderStyle: 'solid',
            // borderWidth: 2,
            // borderColor: 'blue',
            alignItems: 'center'
        },
        icon_text: {
            color: 'white'
        },
        drawer: {
            // borderStyle: 'solid',
            // borderWidth: 2,
            // borderColor: 'green',
            borderRadius: 25,
            flex: 0.09,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            width: '90%'
        },
        loading: {
            // borderStyle: 'solid',
            // borderWidth: 2,
            // borderColor: 'yellow',
            flex: 0.91,
            height: '90%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        }
    });

    toggleState(): void {
        this.setState({
            play: !this.state.play
            // openSettings: false
        });
    }

    toggleLoading(): void {
        this.setState({
            loading: !this.state.loading
        });
    }

    toggleSettings(): void {
        this.setState({
            openSettings: !this.state.openSettings
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
                    {this.state.loading ? (
                        <ActivityIndicator
                            style={this.styles.loading}
                            size="large"
                            color="#0000ff"
                        />
                    ) : (
                        this.state.play && <CardDeck />
                    )}
                    {this.state.openSettings ? (
                        <View>
                            <Settings />
                            <View style={this.styles.drawer}>
                                <View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.toggleSettings();
                                        }}
                                        style={this.styles.icon}
                                    >
                                        <IconAntDesign
                                            name="back"
                                            size={30}
                                            color="#4F8EF7"
                                        />
                                        <Text style={this.styles.icon_text}>
                                            BACK
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ) : (
                        <View
                            style={
                                !this.state.play
                                    ? this.styles.menu
                                    : this.styles.hide
                            }
                        >
                            {!this.state.play && (
                                <Button
                                    title={'Start'}
                                    onPress={() => {
                                        this.toggleState();
                                    }}
                                ></Button>
                            )}
                            {!this.state.play && (
                                <Button
                                    title="Settings"
                                    onPress={() => {
                                        this.toggleSettings();
                                    }}
                                ></Button>
                            )}
                            {!this.state.play && (
                                <Button
                                    title="Exit"
                                    onPress={() => {
                                        BackHandler.exitApp();
                                    }}
                                ></Button>
                            )}
                        </View>
                    )}
                    {this.state.play && (
                        <View style={this.styles.drawer}>
                            <View>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.toggleLoading();
                                        setTimeout(() => {
                                            this.toggleLoading();
                                        }, 700);
                                    }}
                                    style={this.styles.icon}
                                >
                                    <IconEntypo
                                        name="shuffle"
                                        size={30}
                                        color="#4F8EF7"
                                    />
                                    <Text style={this.styles.icon_text}>
                                        SHUFFLE
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            {/* <View>
								<TouchableOpacity onPress={() => this.toggleSettings()} style={this.styles.icon}>
									<IconFeather name="settings" size={30} color="#4F8EF7" />
									<Text style={this.styles.icon_text}>SETTINGS</Text>
								</TouchableOpacity>
							</View> */}
                            <View>
                                <TouchableOpacity
                                    onPress={() => this.toggleState()}
                                    style={this.styles.icon}
                                >
                                    <IconEntypo
                                        name="menu"
                                        size={30}
                                        color="#4F8EF7"
                                    />
                                    <Text style={this.styles.icon_text}>
                                        MAIN MENU
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </View>
            </ImageBackground>
        );
    }
}
