import React, { useState } from 'react';
import {Text, StyleSheet, View, TextInput, ToastAndroid, TouchableOpacity, useColorScheme, ScrollView } from 'react-native';
import SQLite from 'react-native-sqlite-storage'
import WordCard from '../components/WordCard.js'
import { Button, SearchBar, WhiteSpace } from '@ant-design/react-native';

SQLite.DEBUG(true);
SQLite.enablePromise(false);


const errorCB = (err) => {
    console.log("SQL Error: " + err);
};
 
const openCB = () => {
console.log("Database OPENED");
};

let word = '';

let db = SQLite.openDatabase(
    {
        name: 'dictionary.db',
        createFromLocation: 1,
    }, openCB, errorCB);


//let db = SQLite.openDatabase(database_name, database_version, database_displayname, database_size, openCB, errorCB);

const  ComponentScren = () => {

    const [word, setWord] = useState('');


    const onPressButtonSearch = (username) => {
        db.transaction((tx) => {
            var sql = 'SELECT * FROM av WHERE word =(?)';
            tx.executeSql(sql, [username], (tx, results) => {
                var length = results.rows.length;
                var res = results.rows.item(0);
                //ToastAndroid.show(res.html.toString(), ToastAndroid.LONG);
                setWord(res.html.toString());
            });
        });
    
    }

    return (
        <View>
            <Text style={styles.subHeaderStyle}>Input your word</Text>
            <SearchBar
                defaultValue = ""
                placeholder = "search"
                cancelText = "cancel"
                onSubmit = {() => onPressButtonSearch(word)}
                onChange = {userInput => setWord(userInput)}
            />
            <WhiteSpace/>
            <View style = {styles.button}>
                <Button type="primary" onPress = {() => onPressButtonSearch(word)}>search</Button>
            </View>
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
    button: {
        width: 400,
        justifyContent: 'center',
        flexDirection: "row",
        alignItems: 'center'
    },
    searhcBar: {
        margin: 20
    }
});

export default ComponentScren;