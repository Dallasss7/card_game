import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    SectionList,
    TouchableOpacity,
    Modal,
    TouchableHighlight
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';

import { globalObj } from '../global';

export default function Settings(): JSX.Element {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState(0);

    const selectDeck = () => {
        globalObj.deckType = selectedValue;
    };

    const Decks = [
        {
            title: 'Deck Types',
            data: ['Letters', 'Numbers']
        }
    ];

    const DeckItems = ({ title, selection }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => {
                setSelectedValue(selection);
                setModalVisible(true);
            }}
        >
            <Text style={styles.title}>
                {title}
                {globalObj.deckType === selection && (
                    <IconAntDesign name="check" size={20} color="#4F8EF7" />
                )}
            </Text>
        </TouchableOpacity>
    );

    DeckItems.propTypes = {
        title: PropTypes.string,
        selection: PropTypes.number
    };

    // ** DISABLING DIFFICULTY SETTINGS **
    // const [isEnabled, setIsEnabled] = useState(globalObj.difficulty);
    // const toggleSwitch = () => {
    // globalObj.difficulty = !globalObj.difficulty;
    // return setIsEnabled(previousState => !previousState);
    // };

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Save Changes?</Text>
                        <View style={styles.modal_buttons}>
                            <TouchableHighlight
                                style={{
                                    ...styles.openButton,
                                    backgroundColor: '#2196F3'
                                }}
                                onPress={() => {
                                    selectDeck();
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>Yes</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={{
                                    ...styles.openButton,
                                    backgroundColor: '#2196F3'
                                }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>No</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.container}>
                {/* ** DISABLING DIFFICULTY SETTINGS **
				<View style={styles.difficulty}>
					<Switch
						trackColor={{ false: "#767577", true: "#81b0ff" }}
						thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
						ios_backgroundColor="#3e3e3e"
						onValueChange={toggleSwitch}
						value={isEnabled}
					/>
					<Text style={styles.switch_text}>Increase Difficulty?</Text>
				</View> */}
                <View style={styles.decks}>
                    <View>
                        <SectionList
                            sections={Decks}
                            keyExtractor={(item, index) => item + index}
                            renderItem={({ item, index }) => (
                                <DeckItems title={item} selection={index} />
                            )}
                            renderSectionHeader={({ section: { title } }) => (
                                <Text style={styles.header}>{title}</Text>
                            )}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        // borderColor: 'yellow',
        // borderStyle: 'solid',
        paddingTop: '10%',
        paddingBottom: '10%',
        flex: 0.9,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '90%'
    },
    difficulty: {
        // borderWidth: 2,
        // borderColor: 'yellow',
        // borderStyle: 'solid',
    },
    decks: {
        // borderWidth: 2,
        // borderColor: 'yellow',
        // borderStyle: 'solid',
        flex: 0.5,
        justifyContent: 'center',
        alignContent: 'center'
    },
    switch_text: {
        color: 'white'
    },
    item: {
        backgroundColor: '#fffaf0',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    header: {
        fontSize: 20,
        backgroundColor: '#6495ed',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    title: {
        fontSize: 16
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        margin: 7
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
    },
    modal_buttons: {
        flexDirection: 'row'
    }
});
