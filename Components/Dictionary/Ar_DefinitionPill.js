import React from 'react';
import {View, StyleSheet, Text, FlatList} from "react-native";
import colors from "../../Config/Styles/Colors";

const ArDefinitionPill = ({synonym}) => {
    return (
        <Text style={styles.pill}>
            {synonym.item}
        </Text>
    );
};

const styles = StyleSheet.create({
    pill: {
        textTransform: 'capitalize',
        backgroundColor: colors.primary + '22',
        color: colors.primary,
        borderRadius: 10,
        paddingVertical: 3,
        paddingHorizontal: 10,
        marginHorizontal: 2,
        fontSize: 12
    },

});

export default ArDefinitionPill;