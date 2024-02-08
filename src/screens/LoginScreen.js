import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const expectedPassword = "123456";

        if (password === expectedPassword) {
            try {
                const userInfo = JSON.stringify({ firstName, lastName, email, phone, password });
                await AsyncStorage.setItem('userInfo', userInfo);

                navigation.navigate('HomeScreen');
            } catch (error) {
                Alert.alert('Erreur', 'Une erreur est survenue lors de la sauvegarde des informations');
            }
        } else {
            Alert.alert('Erreur', 'Mot de passe incorrect');
        }
    };


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="FirstName"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={styles.input}
                placeholder="LastName"
                value={lastName}
                onChangeText={setLastName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
            />
            <Button
                title="Connexion"
                onPress={handleLogin}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: '#ccc',
        width: '80%',
    },
    button: {
        marginTop: 20,
        width: '80%',
    },


})

export default LoginScreen;
