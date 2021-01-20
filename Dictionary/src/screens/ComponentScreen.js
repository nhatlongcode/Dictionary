import React, { useState } from 'react';
import {Text, StyleSheet, View, TextInput, ToastAndroid, TouchableOpacity, useColorScheme, ScrollView } from 'react-native';

import WordCard from '../components/WordCard'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Data from '../Data/Data'


let word = '';

//let db = SQLite.openDatabase(database_name, database_version, database_displayname, database_size, openCB, errorCB);

const  ComponentScren = () => {

    const [word, setWord] = useState('');


    const onPressButtonSearch = (username) => {
        Data.Instance().GetHtml(username, setWord);
    
    }


    return (
        <View>
            <TextInput
                placeholder = "search"
                onChangeText = {userInput => setWord(userInput)}
                onSubmitEditing = {() => onPressButtonSearch(word)}
            />
            <WordCard html= {word} />

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
    searhcBar: {
        margin: 20
    }
});

export default ComponentScren;