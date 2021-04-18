import React, {useContext} from 'react';
import {Text, View, StyleSheet, StatusBar, ScrollView} from "react-native";
import colors from '../Config/Styles/Colors';
import ArPackage from "../Components/Ar_Package";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import AuthContext from "../auth/context";

const DashScreen = () => {
    const {user} = useContext(AuthContext)
    return (

        <ScrollView style={styles.container}>
            <StatusBar translucent barStyle={"light-content"} backgroundColor={colors.primary}/>
            <View style={{
                flexDirection: 'column',
                padding: 20,
                paddingVertical: 40,
                marginVertical: 20,
                backgroundColor: colors.primary,
            }}>
                <View style={{marginBottom: 4, color: 'orange', fontSize: 18,flexDirection:'row',alignItems:'center'}}>
                    <MaterialCommunityIcons style={{color: "rgba(255,255,255,0.8)", fontSize: 28, marginRight: 8}} name={'account-circle'}/>
                    <Text style={{marginBottom: 0, color: 'orange', fontSize: 18}}>
                        Welcome back,
                    </Text>
                </View>
                <Text style={styles.name}>{user.user.name}</Text>
            </View>
            <View style={{padding: 10, top: -60,}}>
                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 5,
                    padding: 10,
                    minHeight: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                }}>
                    <MaterialCommunityIcons style={{fontSize: 24, marginRight: 8, color: 'gray'}}
                                            name={'information-outline'}/>
                    <Text style={{marginBottom: 2, color: 'gray', fontSize: 16,}}>
                        Seems like you have not selected any package, Kindly select one from below</Text>
                </View>
                <View style={{paddingTop: 20,}}>
                    <ArPackage name={"Silver Package"} price={'2500'} hours={'7 Hours'} maxSession={'30 Minutes'}/>
                    <ArPackage name={"Gold Package"} price={'5000'} hours={'15 Hours'} maxSession={'40 Minutes'}/>
                    <ArPackage name={"Diamond Package"} price={'6500'} hours={'21 Hours'} maxSession={'60 Minutes'}/>
                </View>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        color: 'white',
        flex: 1,
        backgroundColor: '#efefef',
    },
    name: {
        fontSize: 28,
        color: 'white',
        fontWeight: '700',
        marginBottom: 20,
    }
});

export default DashScreen;
