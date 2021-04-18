import React, {useContext, useState} from 'react';
import {StatusBar, View, StyleSheet, Text, Image, TouchableWithoutFeedback} from "react-native";
import * as Yup from 'yup';
import ArFormInputField from "../Components/forms/Ar_FormInputField";
import ArFormSubmitButton from "../Components/forms/Ar_FormSubmitButton";
import ArForm from "../Components/forms/Ar_Form";
import colors from "../Config/Styles/Colors";
import authApi from "../api/auth"
import ArFormError from "../Components/forms/Ar_FormError";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(6).label('Password'),
})

const LoginScreen = ({navigation}) => {
    const authContext = useContext(AuthContext)
    const [loginFailed, setLoginFailed] = useState(false);
    const handleSubmit = async ({email, password}) => {
        const result = await authApi.login(email, password, 'mobile');
        // console.log(result)
        if (!result.ok) return setLoginFailed(true)
        setLoginFailed(false);
        console.log(result.data);
        authContext.setUser(result.data);
        authStorage.storeToken(JSON.stringify(result.data));
    }
    return (
        <>
            <StatusBar translucent barStyle={"light-content"} backgroundColor={colors.primary}/>
            <View style={styles.container}>
                <View style={styles.logoView}>
                    <Image style={styles.logo} resizeMode={'contain'} source={require('../assets/logo.png')}/>
                    <Text style={styles.logoText}>Making you fluent in English {'\n'} Language through
                        conversation</Text>
                </View>
                <View style={{width: '100%'}}>
                    <ArForm
                        initialValues={{email: '', password: ''}}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        <ArFormError error={"Invalid Email or Password"} visible={loginFailed}/>
                        <ArFormInputField
                            name="email"
                            autoCapitalize={"none"}
                            autoCorrect={false}
                            keyboardType={"email-address"}
                            textContentType={"emailAddress"}
                            icon={'email-outline'}
                            placeholder={'Your Email Address'}
                        />
                        <ArFormInputField
                            name="password"
                            autoCapitalize={"none"}
                            autoCorrect={false}
                            icon={'lock-outline'}
                            password
                            placeholder={'Your Password'}
                        />
                        <ArFormSubmitButton title={"Login"}/>
                    </ArForm>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.linkText}>Dont have an account yet?
                            {'\n'}Register Now</Text>
                    </TouchableWithoutFeedback>
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
        alignItems: 'center',
        justifyContent: 'center'
        // width:'100%'
    },
    logoView: {width: '100%', marginBottom: 60, alignItems: 'center'},
    logo: {width: 160, height: 160,},
    logoText: {color: 'white', textAlign: 'center', textTransform: 'capitalize'},
    linkText: {textAlign: "center", color: 'orange', textTransform: 'capitalize', marginTop: 30},
});
export default LoginScreen;
