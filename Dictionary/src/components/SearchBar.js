import React, { useState } from 'react';
import {Text, StyleSheet, View, TextInput, ToastAndroid, TouchableOpacity, useColorScheme, ScrollView } from 'react-native';

const SearchBar = () =>{


    return (
        <View>
            <View style={styles.container}>
                <View style={styles.searchBox}>
                    <View style={styles.inputField} on>
                        <TextInput placeholder="search" />
                    </View>
                    <View style={{justifyContent: 'center'}}>
                        <Text style={{
                            fontSize: 20,
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
        backgroundColor: 'lightgray',
        borderRadius: 10,
        paddingBottom: 2,
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        opacity: 100,
        width: '80%',
        borderWidth: 0,
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