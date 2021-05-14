import React from 'react';
import { Image } from 'react-native';
const Background = ({ source }) => {
    return (
        <Image
            source={source}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
            }}
        ></Image>
    );
};

export default Background;
