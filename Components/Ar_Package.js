import React from 'react';
import {View, StyleSheet, Text} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const ArPackage = ({name, hours, price, maxSession}) => {
    return (
        <View style={styles.container}>
            <View style={styles.packageNameBlock}>
                <Text style={styles.packageName}>{name}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 2}}>
                    <MaterialCommunityIcons style={{color: "rgba(67,0,151,0.5)", fontSize: 16, marginRight: 4}}
                                            name={'clock'}/>
                    <Text>
                        {hours} / Month</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 2}}>
                    <MaterialCommunityIcons style={{color: "rgba(67,0,151,0.5)", fontSize: 16, marginRight: 4}}
                                            name={'ruler'}/>
                    <Text>
                        Max Session: {maxSession}
                    </Text>
                </View>
            </View>
            <View style={styles.packagePriceBlock}>
                <Text style={styles.packagePrice}>{price}</Text>
                <Text>Pkr</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    packageNameBlock: {},
    packagePriceBlock: {
        alignItems: 'flex-end'
    },
    packageName: {
        fontSize: 26,
        color: '#430097',
        fontWeight: '700',
    },
    packagePrice: {
        fontSize: 36,
        color: 'orange',
        fontWeight: '700',
    }

});
export default ArPackage;