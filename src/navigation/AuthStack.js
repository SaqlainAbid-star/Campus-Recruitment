import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from "../screens/Signin";
import SignupScreen from "../screens/Signup";
import StudentSignin from "../screens/StudentsSignin";
import CompanySignin from "../screens/CompanySignin";

import { GoogleSignin } from '@react-native-community/google-signin';
import SplashScreen from '../screens/Splash';

const Appstack = createStackNavigator();



const AuthStack = () => {
    useEffect(() => {
        // initialize the Google SDK
        GoogleSignin.configure({
            webClientId: '882462284634-ggl69hn67s4psadmqvfoffpl3sq3earl.apps.googleusercontent.com',
          });
    }, []);
    return (
        <Appstack.Navigator
            headerMode='none'>
            <Appstack.Screen name='Splash' component={SplashScreen} />
            <Appstack.Screen name='Login' 
             component={SignInScreen} />
            <Appstack.Screen name='Signup' component={SignupScreen} />
            <Appstack.Screen name='StudentSignin' component={StudentSignin} />
            <Appstack.Screen name='CompanySignin' component={CompanySignin} />
          
        </Appstack.Navigator>
    );
}

export default AuthStack;