import { Slot, Stack } from "expo-router";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AuthProvider from "../providers/AuthProvider";




export default function RootLayout(){


    return (
    <GestureHandlerRootView style={{flex: 1}}>
        <AuthProvider>
            <Slot/>
        </AuthProvider>
       
    </GestureHandlerRootView>
    )
}