import React from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from '../Config/Styles/Colors';

const HomeNavigationButton = ({onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="home" color={'#fff'} size={30} style={{bottom: 1}}/>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: 70,
        height: 70,
        borderRadius: 40,
        bottom: 24,
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
    },
});

export default HomeNavigationButton;
