import React, { useState } from 'react';
import {Text, StyleSheet, View, TextInput, ToastAndroid, TouchableOpacity, useColorScheme, ScrollView } from 'react-native';

const SearchBar = () =>{


    return (
        <View>
            <View style={styles.container}>
                <View style={styles.searchBox}>
                    <View style={styles.inputField}>
                        <TextInput placeholder="search" />
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 32,
                        }}>
                            X
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchBox: {
        margin: 'auto',
        borderRadius: 10,
        paddingBottom: 2,
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        opacity: 100,
        width: '80%',
        borderWidth: 1,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputField: {
        width: '90%',
    },

})

export default SearchBar;