import React from 'react';
import { ToastAndroid } from 'react-native';
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
        name: 'dictionary.db',
        createFromLocation: 1,
    }, openCB, errorCB);



export default class Data {
    static insatnce  = null;

    static Instance() 
    {
        if (Data.insatnce == null)
        {
            this.insatnce = new Data();
        }
        return this.insatnce;
    }

    GetHtml(word, callback)
    {
        db.transaction((tx) => {
            var sql = 'SELECT * FROM av WHERE word =(?)';
            tx.executeSql(sql, [word], (tx, results) => {
                length = results.rows.length;
                if (length > 0)
                {
                    var res = results.rows.item(0);
                    var value = res.html.toString();
                    var title = res.word.toString();
                    callback(value.toString(), title.toString());
                }
                else
                {
                    callback('<h2>Not found!</h2>','Error!');
                }
            });
        });
    }
}