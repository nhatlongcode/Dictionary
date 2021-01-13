import React, { useState } from 'react';
import {Text, StyleSheet, View, TextInput, ToastAndroid, TouchableOpacity, useColorScheme } from 'react-native';
import SQLite from 'react-native-sqlite-storage'

SQLite.DEBUG(true);
SQLite.enablePromise(false);


const errorCB = (err) => {
    console.log("SQL Error: " + err);
};
 
const openCB = () => {
console.log("Database OPENED");
};

let db = SQLite.openDatabase(
    {
        name: 'test.db',
    }, openCB, errorCB);

const onPressButtonLogin = (username, password) => {
    db.transaction((tx) => {
        var sql = 'SELECT * FROM user WHERE username=\'' + username + '\'';
        tx.executeSql(sql, [], (tx, results) => {
            var length = results.rows.length;
            ToastAndroid.show(length.toString(), ToastAndroid.LONG);
        });
    });

}

const onPressButtonRegister = (username, password) => {
    db.transaction((tx) => {
        //var sql = 'SELECT * FROM user WHERE username=\'' + username + '\'';
        var sql = 'insert into user (username, password) values (?, ?)';
        tx.executeSql(sql, [username,password], (tx, results) => {
            var length = results.rows.length;
            ToastAndroid.show(sql.toString(), ToastAndroid.LONG);
        });
    });
}

//let db = SQLite.openDatabase(database_name, database_version, database_displayname, database_size, openCB, errorCB);

const  ComponentScren = () => {

    const [username, setUsername] = useState(0);
    const [password, setPassword] = useState(0);


    

    const name = "Long"
    return (
        <View>
            <Text style={styles.subHeaderStyle}>Input your word</Text>
            <TextInput 
                placeholder = "username"
                onChangeText = {userInput => setUsername(userInput)}
            />
            <TextInput 
                placeholder = "password"
                secureTextEntry = {true}
                onChangeText = {userInput => setPassword(userInput)}
            />
            <TouchableOpacity
                onPress = {() => onPressButtonLogin(username,password)}
            >
                <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress = {() => onPressButtonRegister(username,password)}
            >
                <Text>Register</Text>
            </TouchableOpacity>
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