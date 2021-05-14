import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const styles = {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    width: '100%',
    height: 45,
};

const Button = ({ onPress, children, buttonStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles, buttonStyle]}>
            {children}
        </TouchableOpacity>
    );
};

export default Button;
