import React, { useState } from 'react';
import {
    StyleSheet,
    ImageBackground,
    View,
    Button,
    BackHandler,
    TouchableOpacity,
    Text,
    ActivityIndicator,
    AppState
} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
// import IconFeather from 'react-native-vector-icons/Feather';

import CardDeck from './src/components/deck';
import Settings from './src/components/settings';
import ErrorBoundary from './src/components/error_boundary';

export default function App(): JSX.Element {
    const [appState, setAppState] = useState({
        play: false,
        loading: false,
        openSettings: false
    });

    const togglePlay = (): void => {
        setAppState({
            ...appState,
            play: !appState.play
        });
    };

    const toggleLoading = (): void => {
        setAppState({
            ...appState,
            loading: !appState.loading
        });
    };

    const toggleSettings = (): void => {
        setAppState({
            ...appState,
            openSettings: !appState.openSettings
        });
    };

    const styles = StyleSheet.create({
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

    return (
        <ErrorBoundary>
            <ImageBackground
                source={require('./assets/greenPaper.jpg')}
                style={styles.image}
            >
                <View style={styles.container}>
                    {appState.loading ? (
                        <ActivityIndicator
                            style={styles.loading}
                            size="large"
                            color="#0000ff"
                        />
                    ) : (
                        appState.play && <CardDeck />
                    )}
                    {appState.openSettings ? (
                        <View>
                            <Settings />
                            <View style={styles.drawer}>
                                <View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            toggleSettings();
                                        }}
                                        style={styles.icon}
                                    >
                                        <IconAntDesign
                                            name="back"
                                            size={30}
                                            color="#4F8EF7"
                                        />
                                        <Text
                                            accessible={true}
                                            accessibilityLabel="Go back"
                                            accessibilityHint="Navigates to the previous screen"
                                            style={styles.icon_text}
                                        >
                                            BACK
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ) : (
                        <View
                            style={!appState.play ? styles.menu : styles.hide}
                        >
                            {!appState.play && (
                                <Button
                                    testID="startButton"
                                    title={'Start'}
                                    onPress={() => {
                                        togglePlay();
                                    }}
                                ></Button>
                            )}
                            {!appState.play && (
                                <Button
                                    testID="settingsButton"
                                    title="Settings"
                                    onPress={() => {
                                        toggleSettings();
                                    }}
                                ></Button>
                            )}
                            {!appState.play && (
                                <Button
                                    testID="exitButton"
                                    title="Exit"
                                    onPress={() => {
                                        BackHandler.exitApp();
                                    }}
                                ></Button>
                            )}
                        </View>
                    )}
                    {appState.play && (
                        <View testID="loadingContainer" style={styles.drawer}>
                            <View>
                                <TouchableOpacity
                                    testID="loadingButton"
                                    disabled={appState.loading}
                                    onPress={() => {
                                        toggleLoading();
                                        setTimeout(() => {
                                            toggleLoading();
                                            setAppState({
                                                ...appState,
                                                play: true
                                            });
                                        }, 700);
                                    }}
                                    style={styles.icon}
                                >
                                    <IconEntypo
                                        name="shuffle"
                                        size={30}
                                        color="#4F8EF7"
                                    />
                                    <Text style={styles.icon_text}>
                                        SHUFFLE
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => togglePlay()}
                                    style={styles.icon}
                                >
                                    <IconEntypo
                                        name="menu"
                                        size={30}
                                        color="#4F8EF7"
                                    />
                                    <Text style={styles.icon_text}>
                                        MAIN MENU
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </View>
            </ImageBackground>
        </ErrorBoundary>
    );
}
