import React from 'react';
import {Text, StyleSheet, View } from 'react-native';

const  ComponentScren = () =>
{
    const name = "Long"
    return (
        <View>
            <Text style={styles.subHeaderStyle}>Getting started</Text>
            <Text style={styles.textStyle}>My name is {name}</Text>
        </View>
        
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },
    subHeaderStyle: {
        fontSize: 45
    },
});

export default ComponentScren;