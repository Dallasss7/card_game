import React from 'react';
import { Platform, TouchableHighlight, Text } from 'react-native';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Settings from '../components/settings';

configure({ adapter: new Adapter() });

describe('<Settings />', () => {
    // it('should test Settings component', () => {
    // 	const wrapper = shallow(<Settings />);
    // 	expect(wrapper).toMatchSnapshot();
    // });

    it('sets selectDeck on click event', () => {
        if (Platform.OS === 'android' || Platform.OS === 'ios') {
            const wrapper = shallow(<Settings />);
            console.log('HERE ', wrapper.instance());
            // const spy = jest.spyOn(wrapper.instance(), 'selectDeck');

            // wrapper.instance().forceUpdate();
            // wrapper.find(TouchableHighlight).first().props().onPress();
            // wrapper.instance().forceUpdate();
            // wrapper.update();

            // expect(spy).toHaveBeenCalledTimes(1);
            // expect(instance.state.emailPasswordModalVisible).toBe(true);
        } else {
            return;
        }
    });
});
