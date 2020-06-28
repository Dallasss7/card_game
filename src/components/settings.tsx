import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    SectionList,
    TouchableOpacity
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';

import { globalObj } from '../global';

export default function Settings(): JSX.Element {
    const [isSelected, setSelected] = useState(false);
    const selectDeck = (selection) => {
        globalObj.deckType = selection;
        return setSelected((previousState) => !previousState);
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
                selectDeck(selection);
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
    }
});
