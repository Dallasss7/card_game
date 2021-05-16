/**
 * @jest-environment jsdom
 */
import './object_mocks';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Platform } from 'react-native';
import { createSerializer } from 'enzyme-to-json';

import Deck from '../components/deck';
import { globalObj } from '../global.ts';

configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe('<CardDeck />', () => {
    it('should test Deck component', () => {
        const wrapper = shallow(<Deck />);
        expect(wrapper).toMatchSnapshot();
    });

    it('sets winner state on function call', () => {
        if (Platform.OS === 'android' || Platform.OS === 'ios') {
            const deckComponent = shallow(<Deck />);
            deckComponent.instance().gameWinner(false);
            deckComponent.update();
            expect(deckComponent.state('winner')).toBe(false);
            deckComponent.instance().gameWinner(true);
            deckComponent.update();
            expect(deckComponent.state('winner')).toBe(true);
        } else {
            return;
        }
    });
});
