import React from 'react';
import { useEffect } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
    Heading1,
    Background,
    Container,
    Input,
    TextGrey,
    TextPrimary,
    Button,
    TextWhite,
    TextBold,
    TextSmall,
} from '@share';
import auth from '../../assets/img/auth.png';
import styles from '@variables';
import { useState } from 'react';

const SignUp = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(true);
    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    const handleToLogin = () => {
        navigation.push('Login');
    };
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Background
                    source={auth}
                    style={{
                        resizeMode: 'stretch',
                        width: '100%',
                    }}
                ></Background>
                <Container>
                    <Heading1>Sign Up</Heading1>
                    <TextGrey textStyle={{ marginTop: 20 }}>Full name</TextGrey>
                    <Input placeholder="Your full name" />
                    <TextGrey>Email</TextGrey>
                    <Input placeholder="Your email or phone" />
                    <TextGrey>Password</TextGrey>
                    <View>
                        <TouchableOpacity
                            style={{ position: 'absolute', top: 30, right: 20, zIndex: 1 }}
                            onPressIn={() => {
                                setShowPassword(!showPassword);
                            }}
                            onPressOut={() => {
                                setShowPassword(!showPassword);
                            }}
                        >
                            <Icon
                                name="eye"
                                style={{
                                    fontSize: 14,

                                    color: styles.color.grey,
                                }}
                            ></Icon>
                        </TouchableOpacity>
                        <Input placeholder="Password" secureTextEntry={showPassword} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <TextPrimary>Forget Password?</TextPrimary>
                        </TouchableOpacity>
                    </View>
                    <Button buttonStyle={{ backgroundColor: styles.color.primary, marginTop: 30 }}>
                        <TextWhite>SIGN UP</TextWhite>
                    </Button>
                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
                        <TextGrey
                            textStyle={{
                                textAlign: 'center',
                            }}
                        >
                            Already have an account?
                        </TextGrey>
                        <TouchableOpacity onPress={handleToLogin}>
                            <TextPrimary
                                textStyle={{
                                    paddingLeft: 10,
                                    fontWeight: 'bold',
                                    textDecorationLine: 'underline',
                                }}
                            >
                                Login
                            </TextPrimary>
                        </TouchableOpacity>
                    </View>
                    {/* Sign in with */}
                    <Container viewStyle={{ marginTop: 30 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{ flex: 1, height: 1, backgroundColor: styles.color.grey }}
                            />
                            <View>
                                <TextGrey
                                    textStyle={{
                                        width: 140,
                                        textAlign: 'center',
                                    }}
                                >
                                    Sign in with
                                </TextGrey>
                            </View>
                            <View
                                style={{ flex: 1, height: 1, backgroundColor: styles.color.grey }}
                            />
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginTop: 20,
                            }}
                        >
                            <View style={{ width: '50%', paddingRight: 10 }}>
                                <Button buttonStyle={{ backgroundColor: styles.color.white }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Icon
                                            size={30}
                                            color="#4285F4"
                                            name="facebook"
                                            type="MaterialIcons"
                                        ></Icon>
                                        <TextSmall
                                            textStyle={{ letterSpacing: 0.5, fontWeight: '700' }}
                                        >
                                            {'  '}
                                            FACEBOOK
                                        </TextSmall>
                                    </View>
                                </Button>
                            </View>
                            <View style={{ width: '50%', paddingLeft: 10 }}>
                                <Button buttonStyle={{ backgroundColor: styles.color.white }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Icon
                                            size={30}
                                            color="#dd4b39"
                                            name="google-plus-square"
                                            type="MaterialIcons"
                                        ></Icon>
                                        <TextSmall
                                            textStyle={{ letterSpacing: 0.5, fontWeight: '700' }}
                                        >
                                            {'  '}
                                            GOOGLE
                                        </TextSmall>
                                    </View>
                                </Button>
                            </View>
                        </View>
                    </Container>
                </Container>
            </View>
        </ScrollView>
    );
};

export default SignUp;
