import React, { useState } from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Screens from './Screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchBar from '../components/SearchBar';

const LandingScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <SearchBar navigation={navigation}/>
            </View>
            <View>
                <Text>This is landing screen</Text>
                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate(Screens.Search)}>
                    <Text>
                        Move to next screen
                    </Text>
                </TouchableOpacity>
            </View>
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
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    searchBar: {
        top: 0,
    }
});

export default LandingScreen;