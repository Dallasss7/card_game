import React from 'react';
import { Text } from 'react-native';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ErrorComponent from '../components/error_boundary';

configure({ adapter: new Adapter() });

describe('<ErrorComponent />', () => {
    it('should test Error component', () => {
        const wrapper = shallow(<ErrorComponent />);
        expect(wrapper).toMatchSnapshot();
    });

    it('on render shows error text', () => {
        const wrapper = shallow(<ErrorComponent />);
        wrapper.instance().setState({
            hasError: true
        });
        expect(wrapper.find(Text).length).toBe(1);
    });

    it('should call console log on function call', () => {
        const Something = () => null;
        const wrapper = shallow(
            <ErrorComponent>
                <Something />
            </ErrorComponent>
        );
        const errorTest = new Error('hi!');

        wrapper.find(Something).simulateError(errorTest);
        expect(wrapper.state().hasError).toBe(true);
    });
});
