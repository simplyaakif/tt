import React, {useContext} from 'react';
import {StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import colors from "../Config/Styles/Colors";

const ProfileScreen = () => {
    const {user, setUser} = useContext(AuthContext)
    const handleLogout = () => {
        setUser(null);
        authStorage.removeToken();
    }
    return (
        <>
            <StatusBar translucent barStyle={"light-content"} backgroundColor={colors.primary}/>
            <View style={styles.container}>
                <Text style={styles.containerText}>
                    User Profile
                </Text>
                <Text style={styles.containerSubText}>Change your info or logout easily</Text>
            </View>
            <View style={{marginTop: 30, padding: 20,}}>

                {/*<Text style={{marginTop: 30}}>*/}
                {/*    This is Profile Screen*/}
                {/*    {JSON.stringify(user)}*/}

                {/*</Text>*/}
                <TouchableOpacity
                    style={{backgroundColor: 'orange', width: '100%', paddingHorizontal: 20,paddingVertical:15,borderRadius:5}}
                    onPress={handleLogout}>
                    <Text>Log Out</Text>
                </TouchableOpacity>
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
export default ProfileScreen;
