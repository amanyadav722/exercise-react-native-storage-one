import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const result = await AsyncStorage.getItem('userInfo');
            setUserInfo(JSON.parse(result));
        };

        fetchUserInfo();
    }, []);

    return (
        <View style={StyleSheet.container}>
            {userInfo ? (
                <Text style={StyleSheet.text}>Welcome, {"\n"} {userInfo.firstName} {userInfo.lastName} {"\n"} Email: {userInfo.email} {"\n"} Phone: {userInfo.phone}</Text>
            ) : (
                <Text style={StyleSheet.text}>Loading...</Text>
            )}
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
    text: {
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
        margin: 10,
    },

})

export default HomeScreen;
