import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface EmailInputProps {
    placeholder?: string;
    onChangeText?: (text: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ placeholder, onChangeText }) => {
    const [email, setEmail] = useState('');

    const handleTextChange = (text: string) => {
        setEmail(text);
        if (onChangeText) {
            onChangeText(text);
        }
    };

    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={email}
            onChangeText={handleTextChange}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});

export default EmailInput;