import React, { useState } from 'react';
import {Text, StyleSheet, View, TextInput, ToastAndroid, TouchableOpacity, useColorScheme, ScrollView } from 'react-native';

const Header = () => {
    return (
        <View>
            <View style={styles.header}>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: 'cyan',
        top: 0,
    },
})

export default Header;