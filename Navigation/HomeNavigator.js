import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import DashScreen from "../Screens/DashScreen";
import HomeNavigationButton from "./HomeNavigationButton";
import ProfileScreen from "../Screens/ProfileScreen";
import WordsScreen from "../Screens/WordsScreen";
import SessionHistoryScreen from "../Screens/SessionsHistoryScreen";
import InfoScreen from "../Screens/InfoScreen";

const HomeNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName={'Home'}>
            <Tab.Screen name={'Profile'}
                        component={ProfileScreen}
                        options={{
                            tabBarIcon: ({color, size}) =>
                                <MaterialCommunityIcons name="account" color={color} size={size}/>
                        }}
            />
            <Tab.Screen name={'Words'} component={WordsScreen}
                        options={{
                            tabBarIcon: ({color, size}) =>
                                <MaterialCommunityIcons name="book" color={color} size={size}/>
                        }}
            />
            <Tab.Screen name={'Home'} component={DashScreen}
                        options={({navigation })=>({
                            tabBarButton: () => <HomeNavigationButton onPress={()=>navigation.navigate('Home')}/>,
                        })}
            />
            <Tab.Screen name={'Sessions'} component={SessionHistoryScreen}
                        options={{
                            tabBarIcon: ({color, size}) =>
                                <MaterialCommunityIcons name="clock" color={color} size={size}/>
                        }}
            />
            <Tab.Screen name={'Info'} component={InfoScreen}
                        options={{
                            tabBarIcon: ({color, size}) =>
                                <MaterialCommunityIcons name="information" color={color} size={size}/>
                        }}
            />
        </Tab.Navigator>
    );
};

export default HomeNavigator;
