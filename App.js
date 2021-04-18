import React, {useEffect, useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import Ar_Theme from './Config/Styles/Theme';
import AuthNavigator from "./Navigation/AuthNavigator";
import AuthContext from "./auth/context";
import HomeNavigator from "./Navigation/HomeNavigator";
import authStorage from "./auth/storage";

export default function App() {
    const [user, setUser] = useState();
    const restoreToken = async () => {
        const token = await authStorage.getToken();
        if (!token) return;
        setUser(JSON.parse(token));
    }
    useEffect(() => {
        restoreToken()
    }, [])

    return (
        <AuthContext.Provider value={{user, setUser}}>
            <NavigationContainer theme={Ar_Theme}>
                {user ? <HomeNavigator/> : <AuthNavigator/>}
            </NavigationContainer>
        </AuthContext.Provider>
    );
}
