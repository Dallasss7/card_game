import React from 'react';
import { Platform, TouchableHighlight, Text } from 'react-native';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Settings from '../components/settings';
import { globalObj } from '../global';

configure({ adapter: new Adapter() });

describe('<Settings />', () => {
    it('should test Settings component', () => {
        const wrapper = shallow(<Settings />);
        expect(wrapper).toMatchSnapshot();
    });

    xit('sets selectDeck on click event', () => {
        if (Platform.OS === 'android' || Platform.OS === 'ios') {
            const wrapper = shallow(<Settings />);
            wrapper.instance().selectDeck();
            expect(globalObj.deckType).toBe(wrapper.instance().selectedValue);
        } else {
            return;
        }
    });
});
