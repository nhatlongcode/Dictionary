import React, { useState } from 'react';
import {View, ScrollView } from 'react-native';
import HTML from "react-native-render-html";

const WordCard = ({html}) => {
    return (
        <View>
            <ScrollView>
                <HTML source= {{html: html}} />
            </ScrollView>

        </View>
    );
};

export default WordCard;
