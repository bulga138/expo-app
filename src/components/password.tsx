import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface PasswordInputProps {
    placeholder?: string;
    onChangeText?: (text: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ placeholder, onChangeText }) => {
    const [password, setPassword] = useState('');

    const handlePasswordChange = (text: string) => {
        // Clean the input data by removing any leading or trailing whitespace
        const cleanedPassword = text.trim();
        setPassword(cleanedPassword);
        if (onChangeText) {
            onChangeText(text);
        }
    };

    return (
        <View>
            <TextInput
                secureTextEntry
                placeholder={placeholder}
                value={password}
                onChangeText={handlePasswordChange}
                style={styles.input}
                keyboardType="visible-password"
                autoCapitalize="none"
                autoComplete="password"
            />
        </View>
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

export default PasswordInput;