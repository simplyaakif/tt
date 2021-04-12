import React from 'react';
import {Text,StyleSheet} from "react-native";

const ArFormError = ({error,visible}) => {
    if (!error || !visible) return null;

    return (
        <Text style={styles.error}>
            {error}
        </Text>
    );
};

const styles = StyleSheet.create({
    error: {
        color:'red',
        marginBottom:6,
        top:-6,
    },});
export default ArFormError;