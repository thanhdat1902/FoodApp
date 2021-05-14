import React from 'react';
import { View } from 'react-native';

const styles = { paddingLeft: 30, paddingRight: 30 };

function Container({ children, viewStyle }) {
    return <View style={[styles, viewStyle]}>{children}</View>;
}

export default Container;
