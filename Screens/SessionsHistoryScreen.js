import React from 'react';
import {Text, View, StyleSheet, ScrollView, StatusBar} from 'react-native';
import colors from '../Config/Styles/Colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Ar_SessionPanel from "../Components/Ar_SessionPanel";


const SessionHistoryScreen = () => {
    return (
        <>
            <StatusBar translucent barStyle={"light-content"} backgroundColor={colors.primary}/>
            <View style={styles.container}>
                <Text style={styles.containerText}>
                    Session History
                </Text>
                <Text style={styles.containerSubText}>Here you will find all the sessions taken by you.</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <Ar_SessionPanel/>
                <Ar_SessionPanel/>
                <Ar_SessionPanel/>
                <Ar_SessionPanel/>
                <Ar_SessionPanel/>
                <Ar_SessionPanel/>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        padding: 20,
    },
    containerText: {
        color: colors.secondary,
        fontSize: 24,
        fontWeight: '700',
        marginTop: 30,
    },
    containerSubText: {
        color: colors.white,
        marginBottom: 15,
    },
    scrollView: {
        flex: 1,
    },

});
export default SessionHistoryScreen;
