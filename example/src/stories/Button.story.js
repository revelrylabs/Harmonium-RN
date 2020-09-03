import React from 'react';
import { Button } from 'harmonium-rn';
import { storiesOf } from '@storybook/react-native';

storiesOf("Button", module)
    .add("Hello Button", () => (
        <Button title='HELLO' onPress={() => console.warn('Hello')} />
    ))
    .add("Goodbye Button", () => (
        <Button title='GOODBYE' onPress={() => console.warn('Goodbye')} />
    ))