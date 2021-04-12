import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import HomeNavigator from "./Navigation/HomeNavigator";
import Ar_Theme from './Config/Styles/Theme';

export default function App() {
    return (
        <NavigationContainer theme={Ar_Theme}>
            <HomeNavigator/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
