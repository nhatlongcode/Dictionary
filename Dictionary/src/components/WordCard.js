import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import HTML from 'react-native-render-html';

const WordCard = ({html}) => {
  return (
    <View style={styles.View}>
      <ScrollView>
        <HTML
          tagsStyles={{
            h3: {color: 'gray'},
          }}
          source={{html: html}}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    margin: 15,
    marginBottom: 100,
  },
});

export default WordCard;
