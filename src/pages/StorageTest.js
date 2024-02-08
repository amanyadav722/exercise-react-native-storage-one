import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


function StorageTest() {
    return (
        <View style={StyleSheet.container}>
            <Text>Hello from StorageTest!!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default StorageTest