import React from 'react'
import { Button, View } from 'react-native';
import WordCard from '../components/WordCard';
import Tts from 'react-native-tts';
import throttle from 'lodash.throttle';
Tts.setDucking(true);

const WordScreen = ({route, navigation}) => {
    const {contentHtml, title} = route.params;

    const onClickSpeackButton = () => {
        Tts.speak(title.toString()) 
    }

    return(
        <View>
            <Button 
                title='speak'
                onPress={onClickSpeackButton}
            />
            <WordCard html={contentHtml}/>
        </View>
    );
}

export default WordScreen;