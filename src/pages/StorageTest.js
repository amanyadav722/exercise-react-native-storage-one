import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';


function StorageTest() {

//     const saveInfo = () => {
//         AsyncStorage.setItem{ 'name', 'Aman YADAV' }
//         . then{
//         () => (
//             Console.log("result");
//         )
//     }
// }

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