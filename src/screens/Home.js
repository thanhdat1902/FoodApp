import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector, keySelector, useDispatch, actions } from '@context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import homeBackground from '../../assets/img/home.png';
import LinearGradient from 'react-native-linear-gradient';
import {
    Button,
    Container,
    TextBold,
    Heading1,
    Heading2,
    TextGrey,
    TextPrimary,
    TextWhite,
} from '@share';
import styles from '@variables';
import { useEffect } from 'react';

const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    const testVariable = useSelector(keySelector.testVariable);
    const handleSkip = () => {
        navigation.push('Intro');
    };
    const handlSignIn = () => {
        navigation.push('Login');
    };
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, []);
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {/* Background part */}
            <Image
                source={homeBackground}
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                }}
            ></Image>
            <LinearGradient
                colors={['#00000000', '#00000075']}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                }}
            ></LinearGradient>

            {/* Skip button */}
            <View
                style={{
                    marginRight: 20,
                    marginTop: 20,
                    marginBottom: 50,
                    alignItems: 'flex-end',
                }}
            >
                <Button
                    onPress={handleSkip}
                    buttonStyle={{ backgroundColor: styles.color.white, width: 80 }}
                >
                    <TextPrimary>Skip</TextPrimary>
                </Button>
            </View>

            {/* Welcome to Food Hub */}
            <Container viewStyle={{ marginTop: 100, marginBottom: 150 }}>
                <Heading1>Welcome to</Heading1>
                <Heading2 headingStyle={{ color: styles.color.primary }}>Food Hub</Heading2>
                <TextGrey>Your favourite foods delivered fast at your door</TextGrey>
            </Container>

            {/* Sign in with parts */}
            <Container>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: styles.color.white }} />
                    <View>
                        <TextWhite
                            textStyle={{
                                fontWeight: 'bold',
                                width: 140,
                                textAlign: 'center',
                            }}
                        >
                            Sign in with
                        </TextWhite>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: styles.color.white }} />
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
                                <TextBold> FACEBOOK</TextBold>
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
                                <TextBold> GOOGLE</TextBold>
                            </View>
                        </Button>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Button buttonStyle={{ backgroundColor: '#ffffff3b' }}>
                        <TextWhite
                            textStyle={{
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}
                        >
                            Start with email or phone
                        </TextWhite>
                    </Button>
                </View>
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
                    <TextWhite
                        textStyle={{
                            textAlign: 'center',
                        }}
                    >
                        Already have an account?
                    </TextWhite>
                    <TouchableOpacity onPress={handlSignIn}>
                        <TextWhite
                            textStyle={{
                                paddingLeft: 10,
                                fontWeight: 'bold',
                                textDecorationLine: 'underline',
                            }}
                        >
                            Sign-in
                        </TextWhite>
                    </TouchableOpacity>
                </View>
            </Container>
        </View>
    );
};

export default Home;
