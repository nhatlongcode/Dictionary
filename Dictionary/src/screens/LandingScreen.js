import React, { useState } from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Screens from './Screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const LandingScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>This is landing screen</Text>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate(Screens.Search)}>
                <Text>
                    Move to next screen
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 40,
        width: '40%',
        backgroundColor: 'cyan',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default LandingScreen;