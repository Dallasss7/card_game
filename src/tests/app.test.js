/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import {
    Platform,
    ActivityIndicator,
    Button,
    BackHandler,
    TouchableOpacity
} from 'react-native';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

import App from '../../App.tsx';
import Settings from '../components/settings';
import CardDeck from '../components/deck';

configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
const appComponent = shallow(<App />);

describe('<App />', () => {
    it('should test App component', () => {
        // const wrapper = shallow(<App />);
        expect(appComponent).toMatchSnapshot();
    });

    it('has 2 child', () => {
        if (Platform.OS === 'android' || Platform.OS === 'ios') {
            const tree = renderer.create(<App />).toJSON();
            expect(tree.children.length).toBe(2);
        } else {
            return;
        }
    });

    fit('toggles the settings on state change', () => {
        if (Platform.OS === 'android' || Platform.OS === 'ios') {
            const appComponent = shallow(<App />);
            const settingsButton = appComponent
                .find('View')
                .findWhere((node) => node.prop('testID') === 'settingsButton')
                .first();
            settingsButton.simulate('click');
            expect(
                appComponent
                    .find('View')
                    .findWhere((node) => node.prop('testID') === 'mainMenu')
                    .length
            ).toBe(1);
        } else {
            return;
        }
    });

    it('toggles the activity indicator on state change', () => {
        if (Platform.OS === 'android' || Platform.OS === 'ios') {
            // const appComponent = shallow(<App />);
            appComponent.instance().toggleLoading();
            appComponent.update();
            expect(appComponent.find(ActivityIndicator).length).toBe(1);
        } else {
            return;
        }
    });

    it('toggles the cardComponent on state change', () => {
        if (Platform.OS === 'android' || Platform.OS === 'ios') {
            // const appComponent = shallow(<App />);
            appComponent.instance().toggleState();
            appComponent.update();
            expect(appComponent.find(CardDeck).length).toBe(1);
        } else {
            return;
        }
    });

    it('calls toggleSettings on click', () => {
        if (Platform.OS === 'android' || Platform.OS === 'ios') {
            // const appComponent = shallow(<App />);
            const instance = appComponent.instance();
            instance.toggleSettings();
            appComponent.update();
            const spyPreventDefault = jest.spyOn(instance, 'toggleSettings');
            appComponent.update();
            appComponent.find('TouchableOpacity').props().onPress();
            expect(spyPreventDefault).toHaveBeenCalled();
        } else {
            return;
        }
    });

    it('calls toggleState on click', () => {
        if (Platform.OS === 'android' || Platform.OS === 'ios') {
            // const appComponent = shallow(<App />);
            const instance = appComponent.instance();
            const spyPreventDefault = jest.spyOn(instance, 'toggleState');
            appComponent.update();
            appComponent
                .find(Button)
                .findWhere((node) => node.prop('testID') === 'startButton')
                .props()
                .onPress();
            expect(spyPreventDefault).toHaveBeenCalled();
        } else {
            return;
        }
    });

    it('calls toggleSettings on click', () => {
        if (Platform.OS === 'android' || Platform.OS === 'ios') {
            // const appComponent = shallow(<App />);
            const instance = appComponent.instance();
            const spyPreventDefault = jest.spyOn(instance, 'toggleSettings');
            appComponent.update();
            appComponent
                .find(Button)
                .findWhere((node) => node.prop('testID') === 'settingsButton')
                .props()
                .onPress();
            expect(spyPreventDefault).toHaveBeenCalled();
        } else {
            return;
        }
    });

    // xit('calls toggleSettings on click', () => {
    //     if (Platform.OS === 'android' || Platform.OS === 'ios') {
    //         const testProps = {
    //             play: true,
    //             openSettings: false,
    //             loading: false
    //         };

    //         const wrapper = shallow(<App {...testProps} />);
    //         const instance = wrapper.instance();
    //         const spyPreventDefault = jest.spyOn(instance, 'toggleLoading');
    //         wrapper
    //             .find(TouchableOpacity)
    //             .findWhere((node) => node.prop('testID') === 'loadingButton')
    //             .props()
    //             .onPress();
    //         expect(spyPreventDefault).toHaveBeenCalled();
    //     } else {
    //         return;
    //     }
    // });

    it('calls exit on click', () => {
        if (Platform.OS === 'android' || Platform.OS === 'ios') {
            // const appComponent = shallow(<App />);
            const spyPreventDefault = jest.spyOn(BackHandler, 'exitApp');
            appComponent.update();
            appComponent
                .find(Button)
                .findWhere((node) => node.prop('testID') === 'exitButton')
                .props()
                .onPress();
            expect(spyPreventDefault).toHaveBeenCalled();
        } else {
            return;
        }
    });
});
