import React from 'react';
import { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Heading1, Background, Container } from '@share';
import auth from '../../assets/img/auth.png';
const Login = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <View>
            <Image
                source={auth}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    resizeMode: 'stretch',
                    width: '100%',
                }}
            ></Image>
            <Container>
                <Heading1>Log in</Heading1>
            </Container>
        </View>
    );
};

export default Login;
