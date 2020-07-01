import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App.tsx';
import { Platform } from 'react-native';

describe('<App />', () => {
    it('has 2 child', () => {
        if (Platform.OS === 'android' || Platform.OS === 'ios') {
            const tree = renderer.create(<App />).toJSON();
            expect(tree.children.length).toBe(2);
        } else {
            return;
        }
    });
});
