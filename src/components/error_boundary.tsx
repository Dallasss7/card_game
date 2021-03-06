import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Text } from 'react-native';

import { ErrorState, ErrorProp } from '../interfaces';

export default class ErrorBoundary extends Component<ErrorProp, ErrorState> {
    constructor(props: ErrorProp) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: ErrorState): typeof error {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo): void {
        console.log('ErrorBoundary: ', error);
        console.log('ErrorBoundary: ', info);
    }

    render(): JSX.Element | ReactNode {
        if (this.state.hasError) {
            return <Text>Something went wrong.</Text>;
        }
        return this.props.children;
    }
}
