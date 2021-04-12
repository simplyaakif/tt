import React from 'react';
import {View, StyleSheet, Text, StatusBar, Image} from 'react-native';
import ArButton from "../Components/Ar_Button";

const WelcomeScreen = ({navigation}) => {
    return (
        <>
            <StatusBar translucent barStyle={"light-content"} backgroundColor={colors.primary}/>
            <View style={styles.container}>
                <View style={styles.logoView}>
                    <Image style={styles.logo} resizeMode={'contain'} source={require('../assets/logo.png')}/>
                    <Text style={styles.logoText}>Making you fluent in English {'\n'} Language through conversation</Text>
                </View>
                <View style={styles.buttonView}>
                    <ArButton title={'Log In'} color={colors.primary} bkgd={'white'} onPress={()=>navigation.navigate("Login")}/>
                    <ArButton title={'Register'} color={'black'} onPress={()=>navigation.navigate("Register")}/>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        color: 'white',
        flex: 1,
        padding: 20,
    },
    text: {
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 20,
    },
    logo:{width: 160, height: 160,},
    logoText:{color: 'white', textAlign: 'center', textTransform: 'capitalize'},
    logoView:{width: '100%', marginTop: 60, alignItems: 'center'},
    buttonView: {flex: 1, flexDirection: 'column-reverse'}
});

export default WelcomeScreen;