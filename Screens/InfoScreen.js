import React from 'react';
import {StatusBar, Text, View, StyleSheet} from "react-native";
import colors from "../Config/Styles/Colors";

const InfoScreen = () => {
    return (
        <>
            <StatusBar translucent barStyle={"light-content"} backgroundColor={colors.primary}/>
            <View style={styles.container}>
                <Text style={styles.containerText}>
                    Upcoming Courses
                </Text>
                <Text style={styles.containerSubText}>Upcoming courses by
                    American Institute of English </Text>
            </View>
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
export default InfoScreen;