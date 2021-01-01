/**
 * @jest-environment jsdom
 */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

import Card from '../components/card';
import { globalObj } from '../global';

configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe('<Card />', () => {
    const mockInstance = {
        state: {
            defaultImage: 0,
            press: true
        },
        props: {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            letterDisplay: () => 1,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            toggleWinner: () => {}
        }
    };

    it('should test Card component', () => {
        const wrapper = shallow(<Card />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should populate state on creation', () => {
        const wrapper = shallow(<Card />);
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.state).toBeTruthy();
    });

    it('should populate globalObj on creation', () => {
        shallow(<Card />);
        expect(globalObj.held.length).toBe(0);
        expect(globalObj.matches).toBe(0);
    });

    it('returns letter on function call', () => {
        const wrapper = shallow(<Card />);
        expect(wrapper.instance().letterDisplay(1)).toBe(1);
    });

    it('sets state on function call', () => {
        const wrapper = shallow(<Card />);
        const instance = wrapper.instance();
        instance.setState({
            match: true
        });

        instance.toggleState();
        expect(instance.state.match).toBe(false);
    });

    it('displays alert if previous is this', () => {
        const jsdomAlert = window.alert;
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        window.alert = () => {};

        const testProps = {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            letterDisplay: () => {},
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            toggleWinner: () => {}
        };

        const wrapper = shallow(<Card {...testProps} />);
        const instance = wrapper.instance();
        const windowSpy = jest.spyOn(window, 'alert');
        globalObj.previous = instance;

        instance.togglePress();
        expect(windowSpy).toHaveBeenCalled();
        // restore the jsdom alert
        window.alert = jsdomAlert;
    });

    it('it should set state if no card is held', () => {
        const testProps = {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            letterDisplay: () => {},
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            toggleWinner: () => {}
        };

        const wrapper = shallow(<Card {...testProps} />);
        const instance = wrapper.instance();
        globalObj.previous = false;
        const stateSpy = jest.spyOn(instance, 'setState');

        instance.togglePress();

        expect(stateSpy).toHaveBeenCalled();
        expect(globalObj.previous).toBe(instance);
    });

    it('it should set state and set held to current card', () => {
        const testProps = {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            letterDisplay: () => 1,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            toggleWinner: () => {}
        };

        const wrapper = shallow(<Card {...testProps} />);
        const instance = wrapper.instance();
        globalObj.previous = mockInstance;
        const stateSpy = jest.spyOn(instance, 'setState');

        instance.togglePress();

        expect(stateSpy).toHaveBeenCalled();
        expect(globalObj.held === instance.props.letterDisplay()).toBe(true);
    });

    it('it should check if the cards match with a settimeout', () => {
        jest.useFakeTimers();
        const testProps = {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            letterDisplay: () => 1,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            toggleWinner: () => {}
        };

        const wrapper = shallow(<Card {...testProps} />);
        const instance = wrapper.instance();
        globalObj.previous = mockInstance;
        // globalObj.previous.props = testProps;
        const stateSpy = jest.spyOn(instance, 'setState');

        instance.togglePress();

        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 700);
        expect(stateSpy).toHaveBeenCalled();
        // expect(globalObj.previous).toBe(undefined);
    });

    it('should rest everything with a settimeout if the cards dont match', () => {
        jest.useFakeTimers();
        const testProps = {
            letterDisplay: () => true,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            toggleWinner: () => {}
        };

        const wrapper = shallow(<Card {...testProps} />);
        const instance = wrapper.instance();
        globalObj.previous = mockInstance;
        const stateSpy = jest.spyOn(instance, 'setState');

        instance.togglePress();

        expect(stateSpy).toHaveBeenCalled();
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 700);
        expect(globalObj.held.length).toBe(0);
    });

    it('on press should call togglePress if there is no match', () => {
        const testProps = {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            letterDisplay: () => {},
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            toggleWinner: () => {}
        };

        const wrapper = shallow(<Card {...testProps} />);
        const instance = wrapper.instance();
        instance.setState({
            match: false
        });
        const spyPreventDefault = jest.spyOn(instance, 'togglePress');

        wrapper.find('TouchableOpacity').props().onPress();
        expect(spyPreventDefault).toHaveBeenCalled();
    });
});
