import React from 'react';
import { View, Text } from 'react-native';
import variable from '@variables';
const heading = {
    fontWeight: 'bold',
    color: variable.color.black,
};
function Heading1({ children, headingStyle }) {
    return <Text style={[heading, { fontSize: 50 }, headingStyle]}>{children}</Text>;
}
function Heading2({ children, headingStyle }) {
    return <Text style={[heading, { fontSize: 40 }, headingStyle]}>{children}</Text>;
}
function Heading3({ children, headingStyle }) {
    return <Text style={[heading, { fontSize: 20 }, headingStyle]}>{children}</Text>;
}
function TextGrey({ children, textStyle }) {
    return (
        <Text style={[{ color: variable.color.grey, fontSize: 16 }, textStyle]}>{children}</Text>
    );
}

function TextPrimary({ children, textStyle }) {
    return (
        <Text
            style={[{ color: variable.color.primary, fontSize: 16, fontWeight: 'bold' }, textStyle]}
        >
            {children}
        </Text>
    );
}
function TextWhite({ children, textStyle }) {
    return (
        <Text style={[{ color: variable.color.white, fontSize: 16 }, textStyle]}>{children}</Text>
    );
}
function TextBold({ children, textStyle }) {
    return (
        <Text
            style={[{ color: variable.color.black, fontWeight: 'bold', fontSize: 16 }, textStyle]}
        >
            {children}
        </Text>
    );
}

export { Heading1, Heading2, Heading3, TextPrimary, TextBold, TextGrey, TextWhite };
