import React from 'react';
import { Platform } from 'react-native';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { globalObj } from '../global.ts';
import Deck from '../components/deck';

configure({ adapter: new Adapter() });

describe('<CardDeck />', () => {
    // it('should test App component', () => {
    // 	const wrapper = shallow(<Deck />);
    // 	expect(wrapper).toMatchSnapshot();
    // });

    it('shuffles the letters if deckType is 0', () => {
        if (Platform.OS === 'android' || Platform.OS === 'ios') {
            globalObj.deckType = 0;
            const deckComponent = shallow(<Deck />);
            expect(deckComponent.instance().isDeckTypeDefault()).toBe(true);
            deckComponent.instance().forceUpdate();
            deckComponent.update();
            expect(deckComponent.state('letters').length).toBe(34);
        } else {
            return;
        }
    });

    it('shuffles the numbers if deckType is 1', () => {
        if (Platform.OS === 'android' || Platform.OS === 'ios') {
            globalObj.deckType = 1;
            const deckComponent = shallow(<Deck />);
            expect(deckComponent.instance().isDeckTypeDefault()).toBe(false);
            deckComponent.instance().forceUpdate();
            deckComponent.update();
            expect(deckComponent.state('letters').length).toBe(0);
        } else {
            return;
        }
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
