import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function TodoItem({item, pressHandler}) {
    
    
    return(
        //original code, touchable to delete on the box itself
        // <TouchableOpacity style={styles.container} onPress={ () => pressHandler(item.key) } >
        //     <View style={styles.item}>                
        //         <Text> {item.text} </Text>
        //         <AntDesign name='close' size={24} color='black'  />
        //     </View>         
        // </TouchableOpacity>

        //touchable to delete on the icon
        //TouchableOpacity can be replaced by Scrollview. But its not smooth responsive like TouchableOpacity
        <TouchableOpacity style={styles.container}>
            <View style={styles.item}>
                <Text>{item.text}</Text>
                <TouchableOpacity onPress={ ()=>pressHandler(item.key) } >
                    <AntDesign name='close' size={24} color='black' />
                </TouchableOpacity>
            </View>
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
        // backgroundColor: 'yellow',
    },
    item:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: '#fff',
    }
});