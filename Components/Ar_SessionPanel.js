import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../Config/Styles/Colors";

const ArSessionPanel = () => {
    return (
        <>
            <View style={styles.sessionPanel}>
                <Text style={styles.sessionPanelHeading}>
                    Session
                </Text>
                <View style={styles.iconRow}>
                    <View style={styles.iconCol}>
                        <View style={styles.iconBox}>
                            <MaterialCommunityIcons style={styles.sessionPanelIcon} size={18} name={"clock"}/>
                            <Text style={styles.iconBoxText}>
                                Start Time: 5 Pm
                            </Text>
                        </View>
                        <View style={styles.iconBox}>
                            <MaterialCommunityIcons style={styles.sessionPanelIcon} size={18} name={"calendar"}/>
                            <Text style={styles.iconBoxText}>
                                Date: 12-April-2021
                            </Text>
                        </View>
                    </View>
                    <View style={styles.iconCol}>
                        <View style={styles.iconBox}>
                            <MaterialCommunityIcons style={styles.sessionPanelIcon} size={18} name={"watch"}/>
                            <Text style={styles.iconBoxText}>
                                Duration: 40 Min
                            </Text>
                        </View>
                        <View style={styles.iconBox}>
                            <MaterialCommunityIcons style={styles.sessionPanelIcon} size={18} name={"book"}/>
                            <Text style={styles.iconBoxText}>
                                Level: Basic
                            </Text>
                        </View>
                    </View>

                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    sessionPanel: {
        margin: 10,
        marginBottom:0,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    sessionPanelHeading: {
        fontSize: 24,
        fontWeight: '700',
    },
    iconRow:{
        flexDirection:'row',
        flex:1,
    },
    iconCol:{
        padding:6,

    },
    sessionPanelIcon:{
        color:'rgba(67,0,151,0.5)',
    },
    iconBox: {
        marginVertical: 2,
        flexDirection: 'row',
        alignItems:'center',
    },
    iconBoxText: {
        marginLeft: 5,
    }
});

export default ArSessionPanel;