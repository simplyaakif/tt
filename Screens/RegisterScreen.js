import React, {useState} from 'react';
import {Image, ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import ArTextInput from "../Components/Ar_TextInput";
import ArButton from "../Components/Ar_Button";
import colors from "../Config/Styles/Colors";
import ArForm from "../Components/forms/Ar_Form";
import ArFormSubmitButton from "../Components/forms/Ar_FormSubmitButton";
import ArFormError from "../Components/forms/Ar_FormError";
import ArFormInputField from "../Components/forms/Ar_FormInputField";
import authApi from "../api/auth";
import authStorage from "../auth/storage";
import * as Yup from "yup";


const validationSchema = Yup.object().shape({
    name:Yup.string().required().min(3).label('Name'),
    profession:Yup.string().label('Profession'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(6).label('Password'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const RegisterScreen = ({navigation}) => {
    const [registerFailed, setRegisterFailed] = useState(false);
    const handleSubmit = async ({name,profession,email, password}) => {
        const result = await authApi.register(name,profession,email, password, 'mobile');
        // console.log(result)
        // if (!result.ok) return setLoginFailed(true)
        // setLoginFailed(false);
        // console.log(result.data);
        // authContext.setUser(result.data);
        // authStorage.storeToken(JSON.stringify(result.data));
    }
    return (
        <ScrollView style={styles.container}>
            <StatusBar translucent barStyle={"light-content"} backgroundColor={colors.primary}/>
            <View style={styles.logoView}>
                <Image style={styles.logo} resizeMode={'contain'} source={require('../assets/logo.png')}/>
            </View>
            <Text style={styles.logoText}>Register for a New Account</Text>
            <ArForm
                initialValues={{name:'',email: '', password: '',confirmPassword:'',profession:''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ArFormError error={"User Exists"} visible={registerFailed}/>
                <ArFormInputField
                    name="name"
                    autoCapitalize={"none"}
                    autoCorrect={false}
                    // keyboardType={"email-address"}
                    // textContentType={"emailAddress"}
                    icon={'account-outline'}
                    placeholder={'Your Name'}
                />
                <ArFormInputField
                    name="profession"
                    autoCapitalize={"none"}
                    autoCorrect={false}
                    // keyboardType={"email-address"}
                    // textContentType={"emailAddress"}
                    icon={'briefcase-outline'}
                    placeholder={'Your Profession'}
                />
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
                <ArFormInputField
                    name="confirmPassword"
                    autoCapitalize={"none"}
                    autoCorrect={false}
                    icon={'lock-outline'}
                    password
                    placeholder={'Confirm Password'}
                />
                {/*<ArTextInput icon={'account-outline'} placeholder={'Enter Your Name'}/>*/}
                {/*<ArTextInput icon={'pin-outline'} placeholder={'Enter Your City'}/>*/}
                {/*<ArTextInput icon={'briefcase-outline'} placeholder={'Enter Your Profession'}/>*/}
                {/*<ArTextInput icon={'email-outline'} placeholder={'Enter Your Email Address'}/>*/}
                {/*<ArTextInput icon={'lock-outline'} password placeholder={'Enter Your Password'}/>*/}
                {/*<ArTextInput icon={'lock-outline'} password placeholder={'ReEnter Your Password'}/>*/}
                <ArFormSubmitButton title={"Register"}/>
            </ArForm>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
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
    logo: {width: 160, height: 160, marginTop: 40},
    logoView: {width: '100%', alignItems: 'center'},
    logoText: {
        textAlign: "center",
        fontSize: 24,
        color: 'white',
        textTransform: 'capitalize',
        fontWeight: '700',
        marginTop: 0,
        marginBottom: 30,
    },
    linkText: {textAlign: "center", marginBottom: 50, color: 'orange', textTransform: 'capitalize', marginTop: 30}
});
export default RegisterScreen;
