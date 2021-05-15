import React from 'react';
import { Image } from 'react-native';
const Background = ({ source, style }) => {
    return (
        <Image
            source={source}
            style={[
                {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                },
                style,
            ]}
        ></Image>
    );
};

export default Background;
