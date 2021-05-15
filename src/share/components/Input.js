import React from 'react';
import { TextInput } from 'react-native';
import variables from '@variables';
const styles = {
    height: 40,
    borderColor: 'gray',
    borderRadius: 8,
    backgroundColor: variables.color.white,
    padding: 10,
    height: 50,
    marginTop: 10,
    marginBottom: 20,
};
const Input = ({ onChangeText, inputStyle, placeholder, secureTextEntry }) => {
    return (
        <TextInput
            style={[styles, inputStyle]}
            placeholder={placeholder}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        />
    );
};

export default Input;
