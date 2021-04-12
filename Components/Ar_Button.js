import React from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity} from "react-native";

const ArButton = ({title, onPress, bkgd='orange', color='white'}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, {backgroundColor:bkgd}]}>
            <Text style={{
                color: color,
            }}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
    }
});

export default ArButton;