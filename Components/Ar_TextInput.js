import React from 'react';
import {TextInput, View, StyleSheet} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';

const ArTextInput = ({
                         placeholder = 'Kindly Type in here',
                         bkgd = 'white',
                         icon = 'email-outline',
                         color = '#0c0c0c', password,
    ...otherProps
                     }) => {
    return (
        <View style={[styles.container, {backgroundColor: bkgd}]}>
            <MaterialCommunityIcons name={icon} style={{marginRight: 10}} size={20} color="#acacac"/>
            <TextInput {...otherProps}  secureTextEntry={password && true} style={[styles.input, {color: color}]}
                       placeholder={placeholder}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        minHeight:40,
    },
    input: {
        color: '#0c0c0c',
        flexGrow:1,
    }
});
export default ArTextInput;