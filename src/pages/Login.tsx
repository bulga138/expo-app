import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import Email from '../components/email';
import Password from '../components/password';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (text: string) => {
        setEmail(text);
    };

    const handlePasswordChange = (text: string) => {
        setPassword(text);
    };

    const handleSubmit = () => {
        // Add your login logic here
        console.log('Email:', email);
        console.log('Password:', password);
        // Perform any additional password validation or processing here
        if (password.length < 8) {
            Alert.alert('Error', 'Password must be at least 8 characters long');
            console.error('Password must be at least 8 characters long');
        } else {
            // Password is valid, do something with it
            Alert.alert('Success', 'Password submitted');
            console.info('Password submitted');
        }
    };

    return (
        <View>
            <Text>Login</Text>

            <Email
                placeholder="Email"
                onChangeText={handleEmailChange}
            />
            <Password
                placeholder="Password"
                onChangeText={handlePasswordChange}
            />
            <Button title="Login" onPress={handleSubmit} />
        </View>
    );
};

export default Login;