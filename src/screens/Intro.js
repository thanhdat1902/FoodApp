import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Heading2, TextGrey, Container } from '@share';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useEffect } from 'react';
import variable from '@variables';
const styles = StyleSheet.create({
    buttonCircle: {
        width: 60,
        height: 60,
        backgroundColor: variable.color.primary,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    image: {
        resizeMode: 'stretch',
        width: 320,
        height: 320,
    },
    title: {
        textAlign: 'center',
    },
});
const slides = [
    {
        key: 'somethun',
        title: 'Browse your menu and order directly',
        text: 'Our app can send you everywhere, even space. For only $2.99 per month',
        image: require('../../assets/img/Intro1.png'),
        imageStyle: styles.image,
        backgroundColor: variable.color.white,
    },
    {
        key: 'somethun-dos',
        title: 'Even to space with us! Together',
        text: 'Our app can send you everywhere, even space. For only $2.99 per month',
        image: require('../../assets/img/Intro2.png'),
        imageStyle: styles.image,
        backgroundColor: variable.color.white,
    },
    {
        key: 'somethun1',
        title: 'Pickup delivery at your door',
        text: 'Our app can send you everywhere, even space. For only $2.99 per month',
        image: require('../../assets/img/Intro3.png'),
        imageStyle: styles.image,
        backgroundColor: variable.color.white,
    },
];
const Intro = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, []);
    const _renderNextButton = () => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.buttonCircle}>
                    <Icon
                        name="arrow-right"
                        color="rgba(255, 255, 255, .9)"
                        size={16}
                        style={{ backgroundColor: 'transparent' }}
                    />
                </View>
            </View>
        );
    };
    const _renderDoneButton = () => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.buttonCircle}>
                    <Icon
                        name="check"
                        color="rgba(255, 255, 255, .9)"
                        size={16}
                        style={{ backgroundColor: 'transparent' }}
                    />
                </View>
            </View>
        );
    };
    const _renderItem = ({ item }) => {
        return (
            <Container viewStyle={{ marginTop: 100 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={styles.image} source={item.image} />
                </View>
                <Heading2 style={styles.title}>{item.title}</Heading2>
                <TextGrey style={styles.text}>{item.text}</TextGrey>
            </Container>
        );
    };
    const handleDone = () => {
        navigation.push('Login');
    };
    return (
        <AppIntroSlider
            data={slides}
            dotStyle={{ display: 'none' }}
            activeDotStyle={{ display: 'none' }}
            renderItem={_renderItem}
            renderDoneButton={_renderDoneButton}
            renderNextButton={_renderNextButton}
            bottomButton
            onDone={handleDone}
        />
    );
};
export default Intro;
