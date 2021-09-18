import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';


export default function AddTodo( {submitHandler} ) {

    const [ text, setText ] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input} 
                placeholder='New Task...'
                onChangeText = {changeHandler}
            /> 
            <Button  onPress={ ()=>submitHandler(text) } title='Add Task'  color='coral' />
        </View>
    );

}


const styles = StyleSheet.create({
    input:{
        height: 60,
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
    }
});