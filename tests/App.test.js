import React from 'react';
import renderer from 'react-test-renderer';
import { Platform, ActivityIndicator } from 'react-native';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App.tsx';
import Settings from '../src/components/settings';
import CardDeck from '../src/components/deck';

configure({ adapter: new Adapter() });

describe('<App />', () => {
    it('has 2 child', () => {
        if (Platform.OS === 'android' || Platform.OS === 'ios') {
            const tree = renderer.create(<App />).toJSON();
            expect(tree.children.length).toBe(2);
        } else {
            return;
        }
    });

    it('toggles the settings on state change', () => {
        if (Platform.OS === 'android' || Platform.OS === 'ios') {
            const appComponent = shallow(<App />);
            appComponent.instance().toggleSettings();
            appComponent.update();
            expect(appComponent.find(Settings).length).toBe(1);
        } else {
            return;
        }
    });

    it('toggles the activity indicator on state change', () => {
        if (Platform.OS === 'android' || Platform.OS === 'ios') {
            const appComponent = shallow(<App />);
            appComponent.instance().toggleLoading();
            appComponent.update();
            expect(appComponent.find(ActivityIndicator).length).toBe(1);
        } else {
            return;
        }
    });

    it('toggles the cardComponent on state change', () => {
        if (Platform.OS === 'android' || Platform.OS === 'ios') {
            const appComponent = shallow(<App />);
            appComponent.instance().toggleState();
            appComponent.update();
            expect(appComponent.find(CardDeck).length).toBe(1);
        } else {
            return;
        }
    });
});
