import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function TodoItem({item, pressHandler}) {
    
    
    return(
        <TouchableOpacity style={styles.container} onPress={ () => pressHandler(item.key) } >
            <Text> {item.text} </Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container:{
        padding:16,
        marginTop: 6,
        borderWidth: 1,
        borderColor: "#333",
        borderStyle: 'solid',
        borderRadius: 10,
    }
});