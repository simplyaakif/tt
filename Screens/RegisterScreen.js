import React from 'react';
import {Image, ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import ArTextInput from "../Components/Ar_TextInput";
import ArButton from "../Components/Ar_Button";
import colors from "../Config/Styles/Colors";


const RegisterScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <StatusBar translucent barStyle={"light-content"} backgroundColor={colors.primary}/>
            <View style={styles.logoView}>
                <Image style={styles.logo} resizeMode={'contain'} source={require('../assets/logo.png')}/>
            </View>
            <Text style={styles.logoText}>Register for a New Account</Text>
            <ArTextInput icon={'account-outline'} placeholder={'Enter Your Name'}/>
            <ArTextInput icon={'pin-outline'} placeholder={'Enter Your City'}/>
            <ArTextInput icon={'briefcase-outline'} placeholder={'Enter Your Profession'}/>
            <ArTextInput icon={'email-outline'} placeholder={'Enter Your Email Address'}/>
            <ArTextInput icon={'lock-outline'} password placeholder={'Enter Your Password'}/>
            <ArTextInput icon={'lock-outline'} password placeholder={'Enter Your Password'}/>
            <ArButton title={'Register'} onPress={() => {
                console.log('Tapped Registration')
            }}/>
            <TouchableWithoutFeedback onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.linkText}>Already have an account?
                {'\n'}Login instead</Text>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        color: 'white',
        flex: 1,
        padding: 20,
    },
    logo: {width: 160, height: 160,marginTop:40},
    logoView: {width: '100%', alignItems: 'center'},
    logoText: {
        textAlign:"center",
        fontSize:24,
        color:'white',
        textTransform:'capitalize',
        fontWeight:'700',
        marginTop:0,
        marginBottom:30,
    },
    linkText: {textAlign: "center",marginBottom:50, color: 'orange', textTransform: 'capitalize', marginTop: 30}
});
export default RegisterScreen;